# Components UI Bao

A universal UI component library for both React and Vue.js applications.

## Installation

```bash
npm install components-ui-bao
```

## Usage

### React Components

```tsx
import { ReactButton } from "components-ui-bao/react";
// or
import { ReactButton } from "components-ui-bao";

function App() {
  return <ReactButton label="Click me" />;
}
```

### Vue Components

```vue
<template>
  <Button label="Click me" />
</template>

<script setup>
import Button from "components-ui-bao/vue/button.vue";
</script>
```

## Available Components

### React

- `ReactButton` - A styled button component

### Vue

- `Button` (from `components-ui-bao/vue/button.vue`) - A styled button component

## Development

```bash
npm run build    # Build the package
npm publish      # Publish to npm
```
