import { Meta, StoryObj } from '@storybook/react';
import React, { CSSProperties } from 'react';
import { LayoutContainer } from '../components';

const boxStyle: CSSProperties = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/LayoutContainer',
  component: LayoutContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          width: '100vw',
          height: '100dvh',
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            width: '80px',
            backgroundColor: 'skyblue',
            fontSize: '20px',
            ...boxStyle,
          }}
        >
          Side Panel
        </div>
        <div style={{ width: '100%' }}>
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta<typeof LayoutContainer>;

type Story = StoryObj<typeof LayoutContainer>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Layout_Breakpoints: Story = {
  args: {
    style: {
      backgroundColor: 'coral',
      fontSize: '40px',
      ...boxStyle,
    },
    children: 'Layout',
  },
};
