# Guide of Quantit UI React Development

## Install

1. Install _pnpm_.
   https://pnpm.io/ko/installation

2. Install _Turborepo_.
   https://turbo.build/repo/docs/installing

3. Install Package Modules.

```
cd <root folder>

pnpm install
```

You are ready to develop QUI React.

## Build and Test

#### Build your module for test.

If you want to test your developing module on `/apps`, try to build single module to test something in this project.

(This process assumes that you have completed the work you are developing.)

1. Move your module directory.

```javascript
cd packages/qui-core
```

2. Build your module.

```javascript
pnpm build
```

#### Test your Module.

1. Move a test project in _apps_ directory.

```
cd apps/<your project directory>

// cd apps/qui-test
```

2. Install your module.

```
pnpm add <your module>

// pnpm add @quantit/qui-react
```

3. Start your test app.

```
pnpm run <command>

// pnpm dev
```
