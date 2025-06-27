import type { Meta, StoryObj } from '@storybook/react';

import {
  DropdownRoot,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
} from '../Dropdown';

const meta: Meta<typeof DropdownRoot> = {
  title: 'Components/Dropdown',
  component: DropdownRoot,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile dropdown menu component with support for multiple interaction types.',
      },
      story: {
        height: '300px',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the dropdown components',
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost'],
      description: 'Visual variant of the dropdown trigger',
    },
  },
  args: {
    size: 'medium',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DropdownRoot {...args}>
      <DropdownTrigger>Open Menu</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Team</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Logout</DropdownItem>
      </DropdownContent>
    </DropdownRoot>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <DropdownRoot size="small">
        <DropdownTrigger>Small</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
      </DropdownRoot>

      <DropdownRoot size="medium">
        <DropdownTrigger>Medium</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
      </DropdownRoot>

      <DropdownRoot size="large">
        <DropdownTrigger>Large</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
      </DropdownRoot>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <DropdownRoot variant="default">
        <DropdownTrigger>Default</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
      </DropdownRoot>

      <DropdownRoot variant="ghost">
        <DropdownTrigger>Ghost</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
      </DropdownRoot>
    </div>
  ),
};

export const WithCheckboxes: Story = {
  render: () => (
    <DropdownRoot>
      <DropdownTrigger>Preferences</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Display</DropdownLabel>
        <DropdownCheckboxItem checked>Show sidebar</DropdownCheckboxItem>
        <DropdownCheckboxItem>Show toolbar</DropdownCheckboxItem>
        <DropdownCheckboxItem checked>Show status bar</DropdownCheckboxItem>
        <DropdownSeparator />
        <DropdownLabel>Notifications</DropdownLabel>
        <DropdownCheckboxItem checked>Email notifications</DropdownCheckboxItem>
        <DropdownCheckboxItem>Push notifications</DropdownCheckboxItem>
      </DropdownContent>
    </DropdownRoot>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <DropdownRoot>
      <DropdownTrigger>Theme</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Theme</DropdownLabel>
        <DropdownRadioGroup value="light">
          <DropdownRadioItem value="light">Light</DropdownRadioItem>
          <DropdownRadioItem value="dark">Dark</DropdownRadioItem>
          <DropdownRadioItem value="system">System</DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownContent>
    </DropdownRoot>
  ),
};

export const WithSubMenus: Story = {
  render: () => (
    <DropdownRoot>
      <DropdownTrigger>Actions</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>New File</DropdownItem>
        <DropdownItem>New Folder</DropdownItem>
        <DropdownSeparator />
        <DropdownSub>
          <DropdownSubTrigger>Export</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Export as PDF</DropdownItem>
            <DropdownItem>Export as PNG</DropdownItem>
            <DropdownItem>Export as SVG</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSub>
          <DropdownSubTrigger>Import</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Import from file</DropdownItem>
            <DropdownItem>Import from URL</DropdownItem>
            <DropdownItem>Import from clipboard</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSeparator />
        <DropdownItem>Delete</DropdownItem>
      </DropdownContent>
    </DropdownRoot>
  ),
};

export const ComplexExample: Story = {
  render: () => (
    <DropdownRoot>
      <DropdownTrigger>Account</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Billing</DropdownItem>
        <DropdownItem>Team</DropdownItem>
        <DropdownItem>Subscription</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Preferences</DropdownLabel>
        <DropdownCheckboxItem checked>Show notifications</DropdownCheckboxItem>
        <DropdownCheckboxItem>Auto-save</DropdownCheckboxItem>
        <DropdownSeparator />
        <DropdownSub>
          <DropdownSubTrigger>Advanced</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>API Keys</DropdownItem>
            <DropdownItem>Webhooks</DropdownItem>
            <DropdownItem>Developer Tools</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSeparator />
        <DropdownItem>Log out</DropdownItem>
      </DropdownContent>
    </DropdownRoot>
  ),
};
