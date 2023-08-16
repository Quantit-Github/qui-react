import { QuiThemeProvider } from '@quantit/qui-react/src';
import React from 'react';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <QuiThemeProvider mode="dark">
      <Story />
    </QuiThemeProvider>
  ),
];

export default preview;
