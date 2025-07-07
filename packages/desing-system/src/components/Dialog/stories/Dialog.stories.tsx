import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../Dialog';

const meta: Meta<typeof DialogRoot> = {
  title: 'Components/Dialog',
  component: DialogRoot,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DialogRoot {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description that provides context about the dialog
            content.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '16px 0' }}>
          <p>
            Dialog content goes here. You can put any content inside the dialog.
          </p>
        </div>
        <DialogFooter>
          <DialogClose />
          <Button variant="primary">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <DialogRoot size="small">
        <DialogTrigger asChild>
          <Button variant="outline">Small Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              This is a small dialog, perfect for simple confirmations.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose />
          </DialogFooter>
        </DialogContent>
      </DialogRoot>

      <DialogRoot size="medium">
        <DialogRoot>
          <Button variant="outline">Medium Dialog</Button>
        </DialogRoot>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Medium Dialog</DialogTitle>
            <DialogDescription>
              This is a medium dialog, the default size for most use cases.
            </DialogDescription>
          </DialogHeader>
          <div style={{ padding: '16px 0' }}>
            <p>Medium dialogs work well for forms and detailed content.</p>
          </div>
          <DialogFooter>
            <DialogClose />
            <Button variant="primary">Continue</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>

      <DialogRoot size="large">
        <DialogTrigger asChild>
          <Button variant="outline">Large Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              This is a large dialog, suitable for complex forms or detailed
              information.
            </DialogDescription>
          </DialogHeader>
          <div style={{ padding: '16px 0' }}>
            <p>
              Large dialogs provide more space for content like tables, lists,
              or detailed forms.
            </p>
          </div>
          <DialogFooter>
            <DialogClose />
            <Button variant="primary">Save</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>

      <DialogRoot size="full">
        <DialogTrigger asChild>
          <Button variant="outline">Full Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Full Screen Dialog</DialogTitle>
            <DialogDescription>
              This dialog takes up the full viewport, great for immersive
              experiences.
            </DialogDescription>
          </DialogHeader>
          <div style={{ padding: '16px 0', minHeight: '200px' }}>
            <p>
              Full screen dialogs are perfect for complex workflows or when you
              need maximum space.
            </p>
          </div>
          <DialogFooter>
            <DialogClose />
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </div>
  ),
};

export const CommonPatterns: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Confirmation Dialog
        </h4>
        <DialogRoot>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete Item</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                item.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose />
              <Button variant="destructive">Delete</Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Form Dialog
        </h4>
        <DialogRoot>
          <DialogTrigger asChild>
            <Button variant="primary">Create New</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Item</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new item.
              </DialogDescription>
            </DialogHeader>
            <div
              style={{
                padding: '16px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    fontSize: '14px',
                  }}
                >
                  Name
                </span>
                <input
                  type="text"
                  placeholder="Enter name"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    fontSize: '14px',
                  }}
                >
                  Description
                </span>
                <textarea
                  placeholder="Enter description"
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: '14px',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose />
              <Button variant="primary">Create</Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Information Dialog
        </h4>
        <DialogRoot>
          <DialogTrigger asChild>
            <Button variant="ghost">View Details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>About This Feature</DialogTitle>
              <DialogDescription>
                Learn more about how this feature works.
              </DialogDescription>
            </DialogHeader>
            <div style={{ padding: '16px 0' }}>
              <h5
                style={{
                  margin: '0 0 8px 0',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Key Features
              </h5>
              <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px' }}>
                <li>Feature one description</li>
                <li>Feature two description</li>
                <li>Feature three description</li>
              </ul>
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                }}
              >
                For more information, check our documentation.
              </p>
            </div>
            <DialogFooter>
              <DialogClose />
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </div>
    </div>
  ),
};

export const WithoutHeader: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>Open Simple Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <div style={{ padding: '8px 0' }}>
          <p>This is a dialog without a header section.</p>
          <p>Sometimes you just need simple content.</p>
        </div>
        <DialogFooter>
          <DialogClose />
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>Open Info Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Information Only</DialogTitle>
          <DialogDescription>
            This dialog displays information without action buttons.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '16px 0' }}>
          <p>Sometimes dialogs are just for displaying information.</p>
          <p>Users can close it using the X button or by clicking outside.</p>
        </div>
        <DialogClose />
      </DialogContent>
    </DialogRoot>
  ),
};

export const LongContent: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>Open Long Content</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read our terms carefully before proceeding.
          </DialogDescription>
        </DialogHeader>
        <div style={{ padding: '16px 0' }}>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ margin: '0 0 12px 0' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose />
          <Button variant="primary">Accept</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button>Custom Styled Dialog</Button>
      </DialogTrigger>
      <DialogContent
        style={{
          background:
            'linear-gradient(to bottom, var(--surface), var(--surface-subtle))',
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ color: 'var(--primary-text)' }}>
            Custom Styled Dialog
          </DialogTitle>
          <DialogDescription>
            This dialog demonstrates custom styling capabilities.
          </DialogDescription>
        </DialogHeader>
        <div
          style={{
            padding: '16px 0',
            border: '1px dashed var(--border)',
            borderRadius: 'var(--border-radius-md)',
            margin: '16px 0',
            background: 'var(--surface-subtle)',
          }}
        >
          <p>
            You can customize the dialog appearance using inline styles or CSS
            classes.
          </p>
        </div>
        <DialogFooter>
          <DialogClose />
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};
