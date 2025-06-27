import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';

import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectGroup,
} from './Select';

const meta: Meta<typeof SelectTrigger> = {
  title: 'Components/Select',
  component: SelectTrigger,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A styled Select component built on top of Radix UI primitives.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the select trigger',
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost'],
      description: 'Visual variant of the select trigger',
    },
    error: {
      control: 'boolean',
      description: 'Whether the select is in an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'grape', label: 'Grape' },
  { value: 'orange', label: 'Orange' },
];

const categories = [
  { group: 'Fruits', items: fruits },
  {
    group: 'Vegetables',
    items: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'lettuce', label: 'Lettuce' },
      { value: 'tomato', label: 'Tomato' },
    ],
  },
];

export const Default: Story = {
  render: (args) => (
    <SelectRoot>
      <SelectTrigger {...args} style={{ width: '200px' }}>
        <SelectValue placeholder="Select a fruit..." />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  ),
};

export const WithGroups: Story = {
  render: (args) => (
    <SelectRoot>
      <SelectTrigger {...args} style={{ width: '200px' }}>
        <SelectValue placeholder="Select food..." />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectGroup key={category.group}>
            <SelectLabel>{category.group}</SelectLabel>
            {category.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
            <SelectSeparator />
          </SelectGroup>
        ))}
      </SelectContent>
    </SelectRoot>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SelectRoot size="small">
        <SelectTrigger style={{ width: '200px' }}>
          <SelectValue placeholder="Small select" />
        </SelectTrigger>
        <SelectContent>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <SelectRoot size="medium">
        <SelectTrigger style={{ width: '200px' }}>
          <SelectValue placeholder="Medium select" />
        </SelectTrigger>
        <SelectContent>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <SelectRoot size="large">
        <SelectTrigger style={{ width: '200px' }}>
          <SelectValue placeholder="Large select" />
        </SelectTrigger>
        <SelectContent>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SelectRoot>
        <SelectTrigger variant="default" style={{ width: '200px' }}>
          <SelectValue placeholder="Default variant" />
        </SelectTrigger>
        <SelectContent>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <SelectRoot>
        <SelectTrigger variant="ghost" style={{ width: '200px' }}>
          <SelectValue placeholder="Ghost variant" />
        </SelectTrigger>
        <SelectContent>
          {fruits.map((fruit) => (
            <SelectItem key={fruit.value} value={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </div>
  ),
};

export const ErrorState: Story = {
  render: (args) => (
    <SelectRoot>
      <SelectTrigger {...args} error style={{ width: '200px' }}>
        <SelectValue placeholder="Select with error..." />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <SelectRoot disabled>
      <SelectTrigger {...args} style={{ width: '200px' }}>
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>Selected value: {value || 'None'}</p>
        <SelectRoot value={value} onValueChange={setValue} open>
          <SelectTrigger style={{ width: '200px' }}>
            <SelectValue placeholder="Controlled select..." />
          </SelectTrigger>

          <SelectContent>
            {fruits.map((fruit) => (
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <Button variant="primary" onClick={() => setValue('')}>
          Clear Selection
        </Button>
      </div>
    );
  },
};
