import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'ghost',
        'destructive',
        'success',
        'warning',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: () => null,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default interactive story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// All variants in one story
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Different states
export const States: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div style={{ width: '300px' }}>
        <Button fullWidth>Full Width</Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Real-world usage patterns
export const CommonPatterns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Form Actions */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Form Actions
        </h4>
        <div
          style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}
        >
          <Button variant="ghost">Cancel</Button>
          <Button variant="outline">Save Draft</Button>
          <Button variant="primary">Publish</Button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Confirmation Dialog
        </h4>
        <div
          style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}
        >
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </div>

      {/* Toolbar */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Toolbar Actions
        </h4>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Button variant="ghost" size="sm">
            Edit
          </Button>
          <Button variant="ghost" size="sm">
            Share
          </Button>
          <Button variant="ghost" size="sm">
            Export
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Call-to-Action
        </h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxWidth: '240px',
          }}
        >
          <Button variant="primary" size="lg" fullWidth>
            Get Started
          </Button>
          <Button variant="outline" fullWidth>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Do and Don't examples
export const DoAndDont: Story = {
  render: () => (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
    >
      {/* Do */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', color: '#059669' }}>✅ Do</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <p style={{ margin: '0 0 6px 0', fontSize: '12px' }}>
              One primary button
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save</Button>
            </div>
          </div>
          <div>
            <p style={{ margin: '0 0 6px 0', fontSize: '12px' }}>
              Consistent sizing
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="outline" size="md">
                Back
              </Button>
              <Button variant="primary" size="md">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Don't */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', color: '#dc2626' }}>❌ Don't</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <p style={{ margin: '0 0 6px 0', fontSize: '12px' }}>
              Multiple primary buttons
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="primary" size="sm">
                Save
              </Button>
              <Button variant="primary" size="sm">
                Publish
              </Button>
            </div>
          </div>
          <div>
            <p style={{ margin: '0 0 6px 0', fontSize: '12px' }}>Mixed sizes</p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Button variant="outline" size="xs">
                Cancel
              </Button>
              <Button variant="primary" size="lg">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Accessibility examples
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
          Try using <kbd>Tab</kbd> to navigate and <kbd>Enter</kbd> to activate
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button>First</Button>
          <Button variant="outline">Second</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
          ARIA labels for icon buttons
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button aria-label="Close dialog">×</Button>
          <Button aria-label="Add item">+</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Custom elements with asChild
export const CustomElements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button asChild>
        <div role="button" tabIndex={0}>
          Custom Div
        </div>
      </Button>
      <Button asChild>
        <span role="button" tabIndex={0}>
          Custom Span
        </span>
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Form integration
export const FormIntegration: Story = {
  render: () => (
    <form style={{ display: 'flex', gap: '8px' }}>
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button type="reset" variant="outline">
        Reset
      </Button>
      <Button type="button" variant="ghost">
        Cancel
      </Button>
    </form>
  ),
  parameters: {
    controls: { disable: true },
  },
};
