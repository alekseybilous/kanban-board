'use client';

import React, {
  useState,
  useCallback,
  ReactNode,
  ComponentType,
  useRef,
  useMemo,
} from 'react';
import { ModalName, ModalPropsFor } from '@/components/Modals/types';
import { modalRegistry } from '@/components/Modals/registry';
import { ModalContext } from './contex';

interface ModalConfig {
  component: ComponentType<any>;
  props: Record<string, any>;
}

export function ModalProvider({ children }: { children?: ReactNode }) {
  const [modals, setModals] = useState<Map<string, ModalConfig>>(new Map());
  const modalIdCounter = useRef(0);

  const generateModalId = (modalName: string): string => {
    modalIdCounter.current += 1;
    return `${modalName}-${modalIdCounter.current}`;
  };

  const preloadModal = useCallback(async (modalName: ModalName) => {
    const entry = modalRegistry[modalName];
    if (!entry || entry.preloaded || entry.loading) return;

    entry.loading = true;
    try {
      const m = await entry.loader();
      entry.preloaded = m.default;
      entry.loading = false;
    } catch (error) {
      entry.loading = false;
      console.error(`Failed to preload modal "${modalName}":`, error);
    }
  }, []);

  const openModal = useCallback(
    <T extends ModalName>(modalName: T, props: ModalPropsFor<T>): string => {
      const entry = modalRegistry[modalName];

      if (!entry) {
        console.error(`Modal "${modalName}" not found in registry`);
        return '';
      }

      const modalId = generateModalId(modalName);

      if (entry.preloaded) {
        setModals((prev) => {
          const newModals = new Map(prev);
          newModals.set(modalId, {
            component: entry.preloaded!,
            props,
          });
          return newModals;
        });
      } else {
        entry
          .loader()
          .then((module) => {
            const ModalComponent = module.default;
            entry.preloaded = ModalComponent;

            setModals((prev) => {
              const newModals = new Map(prev);
              newModals.set(modalId, {
                component: ModalComponent,
                props,
              });
              return newModals;
            });
          })
          .catch((error) => {
            console.error(`Failed to load modal "${modalName}":`, error);
          });
      }

      return modalId;
    },
    []
  );

  const closeModal = useCallback((modalId: string) => {
    setModals((prev) => {
      const newModals = new Map(prev);
      newModals.delete(modalId);
      return newModals;
    });
  }, []);

  const closeAllModals = useCallback(() => {
    setModals(new Map());
  }, []);

  const updateModal = useCallback(
    (modalId: string, newProps: Record<string, any>) => {
      setModals((prev) => {
        const newModals = new Map(prev);
        const config = newModals.get(modalId);

        if (config) {
          config.props = { ...config.props, ...newProps };
        }

        return new Map(newModals);
      });
    },
    []
  );

  const isModalOpen = useCallback(
    (modalName: ModalName): boolean => {
      return Array.from(modals.keys()).some((id) =>
        id.startsWith(`${modalName}-`)
      );
    },
    [modals]
  );

  const getOpenModals = useCallback((): string[] => {
    return Array.from(modals.keys());
  }, [modals]);

  const modalEntries = useMemo(() => Array.from(modals.entries()), [modals]);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        closeAllModals,
        updateModal,
        isModalOpen,
        getOpenModals,
        preloadModal,
      }}
    >
      {children}
      {modalEntries.map(([modalId, { component: ModalComponent, props }]) => {
        return (
          <ModalComponent
            key={modalId}
            isOpen={true}
            onClose={() => closeModal(modalId)}
            {...props}
          />
        );
      })}
    </ModalContext.Provider>
  );
}
