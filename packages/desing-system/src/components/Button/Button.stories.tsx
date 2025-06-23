import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button stories
export const Primary: Story = {
  args: {
    children: 'Button Primary (L)',
    variant: 'primary',
    size: 'lg',
    fullWidth: false,
    disabled: false,
  },
};

export const PrimarySmall: Story = {
  args: {
    children: 'Button Primary (S)',
    variant: 'primary',
    size: 'sm',
  },
};

// Secondary button stories
export const Secondary: Story = {
  args: {
    children: 'Button Secondary (L)',
    variant: 'secondary',
    size: 'lg',
  },
};

export const SecondarySmall: Story = {
  args: {
    children: 'Button Secondary (S)',
    variant: 'secondary',
    size: 'sm',
  },
};

// Destructive button stories
export const Destructive: Story = {
  args: {
    children: 'Button Destructive (L)',
    variant: 'destructive',
    size: 'lg',
  },
};

export const DestructiveSmall: Story = {
  args: {
    children: 'Button Destructive (S)',
    variant: 'destructive',
    size: 'sm',
  },
};

// Other variants
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

// States
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

// Interactive example showing all variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary" size="lg">
          Button Primary (L)
        </Button>
        <Button variant="primary" size="sm">
          Button Primary (S)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="secondary" size="lg">
          Button Secondary (L)
        </Button>
        <Button variant="secondary" size="sm">
          Button Secondary (S)
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="destructive" size="lg">
          Button Destructive (L)
        </Button>
        <Button variant="destructive" size="sm">
          Button Destructive (S)
        </Button>
      </div>
    </div>
  ),
};
