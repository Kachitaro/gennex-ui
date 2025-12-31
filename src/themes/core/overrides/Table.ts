import { Theme } from '@mui/material';

export default function Table(theme: Theme) {
  return {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse !important',
        },
        head: {
          backgroundColor: `${theme.palette.primary.dark} !important`,
          color: 'white',

          paddingLeft: 15,
          button: {
            display: 'none',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        alignRight: {
          '& button svg': {
            color: theme.palette.primary.main,
          },
        },
        root: {
          overflow: 'visible !important',
          backgroundColor: 'inherit !important',
          border: '1px solid #EAEDF1',
          verticalAlign: 'middle !important',
          '&:hover': {
            outline: 'none !important',
          },
          '& .MuiCheckbox-root': {
            width: '100%',
          },
          '& .Mui-TableHeadCell-Content-Labels': {
            width: '100%',
            '& .Mui-TableHeadCell-Content-Wrapper': {
              width: '100%',
            },
          },
        },
        head: {
          fontWeight: '500 !important',
          backgroundColor: `${theme.palette.primary.dark} !important`,
          color: 'white',
          fontSize: 14,
          paddingLeft: 15,
          button: {
            display: 'none',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: '47px',
          borderColor: theme.palette.divider,
          '&:nth-of-type(even)': {
            backgroundColor: '#F4F7F9 !important',
          },
          '&.Mui-selected': {
            backgroundColor: '#e0ecf2 !important',
          },
          '& .MuiCheckbox-root:hover': {
            backgroundColor: 'inherit !important',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '6px',
          },
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          '& tr': {
            display: 'none !important',
          },
          '& tr:first-child': {
            display: 'table-row !important',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  };
}
