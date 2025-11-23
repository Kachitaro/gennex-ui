import type { ReactNode } from 'react';

import type { SxProps, Theme } from '@mui/material';

export type TBreadcrumbItem = {
  url: string;
  title: string;
};

export type BreadcrumbProps = {
  sx?: SxProps<Theme>;
  resources: Record<string, TBreadcrumbItem>;
  separator?: ReactNode;
};
