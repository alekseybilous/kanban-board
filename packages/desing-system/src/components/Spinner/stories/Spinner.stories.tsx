import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '../Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="default" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Default</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="primary" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Primary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="secondary" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Secondary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="success" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Success</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="warning" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Warning</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="danger" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Danger</p>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Spinner size="xs" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>XS</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="sm" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>SM</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>MD</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="lg" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>LG</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="xl" />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>XL</p>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const CommonPatterns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Loading States
        </h4>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Spinner size="sm" />
            <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
              Button Loading
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="md" />
            <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
              Content Loading
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="lg" />
            <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
              Page Loading
            </p>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Inline with Text
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Spinner size="xs" />
          <span>Loading...</span>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Centered in Container
        </h4>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '120px',
            border: '1px dashed #ccc',
            borderRadius: '4px',
          }}
        >
          <Spinner size="md" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" style={{ filter: 'hue-rotate(180deg)' }} />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Custom Color</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" style={{ animationDuration: '1s' }} />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>
          Faster Animation
        </p>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
