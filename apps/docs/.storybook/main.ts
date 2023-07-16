const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: '@quantit/react',
            replacement: path.resolve(__dirname, '../../../packages/qui-core/'),
          },
        ],
      },
    });
  },
};
