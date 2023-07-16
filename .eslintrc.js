module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-qui`
  extends: ["qui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
