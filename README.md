# Gennex UI Library

This project is a UI component library built with React and TypeScript, designed to provide reusable and customizable UI components for web applications.

## Features

- renderTheme function to generate theme based on primary, secondary color, mode, overrideOptions, and overrideComponents. Default is blue and light blue.
- Customize the interface using Material-UI's theme builder feature.
- hooks darkMode to toggle between light and dark themes.

## Installation

You can install the library via npm:

```bash
npm install @gennextech/ui
```

or yarn:

```bash
yarn add @gennextech/ui
```

## Usage

Import the components and themes you need in your React application:

```tsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { renderTheme } from '@gennextech/ui';

const App = () => {
  const theme = renderTheme({
    mode: 'light',
    primaryColor: { main: '#1976d2' },
    secondaryColor: { main: '#dc004e' },
  });

  return <ThemeProvider theme={theme}>{/* Your application components go here */}</ThemeProvider>;
};
export default App;
```

In `renderTheme`, you can customize the theme by providing options such as `mode`, `primaryColor`, `secondaryColor`, `overrideOptions`, and `overrideComponents`.

```tsx
const theme = renderTheme({
  mode: 'dark',
  primaryColor: { main: '#90caf9' },
  secondaryColor: { main: '#f48fb1' },
  overrideOptions: {
    // Custom theme options
  },
  overrideComponents: (theme) => ({
    // Custom component overrides
  }),
});
```
