import { Theme } from '@mui/material';
import merge from 'lodash/merge';

import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import Chip from './Chip';
import Input from './Input';
import RAList from './RAList';
import Table from './Table';
import Toolbar from './Toolbar';

// ==============================|| OVERRIDES - MAIN ||============================== //
export const componentsOverride = (opts: { theme: Theme }) => {
  const { theme } = opts;
  return merge(
    Input(),
    Toolbar(),
    Chip(theme),
    Breadcrumbs(theme),
    Button(theme),
    Table(theme),
    RAList(theme),
  );
};
