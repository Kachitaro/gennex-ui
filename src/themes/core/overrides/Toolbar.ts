import { spaces } from '@/themes/theme.config';

export default function Toolbar() {
  return {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: spaces[8],
          padding: '0 25px !important',
        },
      },
    },
  };
}
