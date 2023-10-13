import { QuiThemeProvider } from '@quantit/qui-react';
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks';
import { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

export const decorators = [
  (Story) => (
    <QuiThemeProvider>
      <Story />
    </QuiThemeProvider>
  ),
];

export default preview;
