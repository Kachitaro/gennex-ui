import type { ReactNode } from 'react';

import type { SxProps, Theme as MuiTheme } from '@mui/material';
import type { RaThemeOptions } from 'ra-ui-materialui';

export type ThemeMode = 'light' | 'dark';
export type ThemeName = 'green' | 'blue';
export interface Theme {
  name: ThemeName;
  light: RaThemeOptions;
  dark?: RaThemeOptions;
}

export type TBreadcrumbItem = {
  url: string;
  title: string;
};

export type BreadcrumbProps = {
  sx?: SxProps<MuiTheme>;
  resources: Record<string, TBreadcrumbItem>;
  separator?: ReactNode;
};
