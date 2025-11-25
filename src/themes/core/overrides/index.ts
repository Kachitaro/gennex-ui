import { Theme } from '@mui/material';
import merge from 'lodash/merge';

import Breadcrumbs from './Breadcrumbs';
import Chip from './Chip';
import Input from './Input';

// ==============================|| OVERRIDES - MAIN ||============================== //
export const componentsOverride = (opts: { theme: Theme }) => {
  const { theme } = opts;
  return merge(Input(), Chip(theme), Breadcrumbs(theme));
};
