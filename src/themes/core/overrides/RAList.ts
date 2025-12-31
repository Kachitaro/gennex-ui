import { Theme } from '@mui/material';
import { fontSizes, radius, spaces } from '../../theme.config';

export default function RAList(theme: Theme) {
  return {
    RaList: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          borderRadius: radius[1],
          overflowX: 'auto',
          '& .RaList-content': {
            padding: spaces[6],
          },
          '& .RaList-action': {
            marginTop: spaces[8],
            marginBottom: spaces[8],
          },
        },
      },
    },
    RaListToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          border: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            paddingTop: spaces[1],
            paddingBottom: spaces[1],
            backgroundColor: 'transparent',
            border: 'none',
          },
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          '& .RaDatagrid-expandIcon': {
            padding: spaces[2],
            fontSize: fontSizes[2],
          },
        },
      },
    },
    RaSimpleFormIterator: {
      styleOverrides: {
        root: {
          '& .RaSimpleFormIterator-line': {
            marginBottom: spaces[2],
          },
        },
      },
    },
    RaFilterForm: {
      styleOverrides: {
        root: {
          padding: `${spaces[2]}`,
          [theme.breakpoints.down('md')]: {
            marginRight: spaces[2],
            padding: 0,
          },
          flex: 1,
        },
      },
    },
    RaFilterFormInput: {
      styleOverrides: {
        root: {
          minWidth: '25%',
          margin: '8px 0px',
          [theme.breakpoints.down('md')]: {
            width: '100%',
          },
          '& .RaFilterFormInput-spacer': {
            [theme.breakpoints.down('md')]: {
              width: 0,
            },
          },
          '& .RaFilterFormInput-hideButton': {
            marginRight: spaces[1],
          },
        },
      },
    },
  };
}
