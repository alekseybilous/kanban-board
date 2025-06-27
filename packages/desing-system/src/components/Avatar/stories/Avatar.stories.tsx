import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarRoot, AvatarImage, AvatarFallback } from '../Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An avatar component for displaying user profile pictures with fallback text.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the avatar',
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded'],
      description: 'Shape variant of the avatar',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    fallback: {
      control: 'text',
      description: 'Fallback text when image fails to load',
    },
  },
  args: {
    size: 'medium',
    variant: 'default',
    fallback: 'JD',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    alt: 'John Doe',
    fallback: 'JD',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'AB',
  },
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        paddingTop: '2rem',
      }}
    >
      <Avatar
        size="small"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="John Doe"
        fallback="JD"
      />
      <Avatar
        size="medium"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="John Doe"
        fallback="JD"
      />
      <Avatar
        size="large"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="John Doe"
        fallback="JD"
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        paddingTop: '2rem',
      }}
    >
      <Avatar
        variant="default"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="John Doe"
        fallback="JD"
      />
      <Avatar
        variant="rounded"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="John Doe"
        fallback="JD"
      />
    </div>
  ),
};

export const FallbackVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        paddingTop: '2rem',
      }}
    >
      <Avatar variant="default" fallback="AB" />
      <Avatar variant="rounded" fallback="CD" />
    </div>
  ),
};

export const UsingPrimitives: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        paddingTop: '2rem',
      }}
    >
      <AvatarRoot size="medium" variant="default">
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="John Doe"
        />
        <AvatarFallback>JD</AvatarFallback>
      </AvatarRoot>

      <AvatarRoot size="large" variant="rounded">
        <AvatarImage src="https://broken-url.jpg" alt="Broken Image" />
        <AvatarFallback>BI</AvatarFallback>
      </AvatarRoot>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        paddingTop: '2rem',
      }}
    >
      <div style={{ display: 'flex', marginLeft: '-8px' }}>
        <Avatar
          size="medium"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="John Doe"
          fallback="JD"
          className="border-2 border-white"
        />
        <Avatar
          size="medium"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=128&h=128&dpr=2&q=80"
          alt="Jane Smith"
          fallback="JS"
          className="border-2 border-white"
        />
        <Avatar
          size="medium"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?&w=128&h=128&dpr=2&q=80"
          alt="Alice Johnson"
          fallback="AJ"
          className="border-2 border-white"
        />
        <Avatar size="medium" fallback="+3" className="border-2 border-white" />
      </div>
    </div>
  ),
};
