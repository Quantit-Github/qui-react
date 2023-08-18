import React from 'react';
import { QuiThemeProvider } from '@quantit/qui-react';

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
    <QuiThemeProvider>
      <Story />
    </QuiThemeProvider>
  ),
];

export default preview;
