import { DeprecatedThemeOptions } from "@mui/material/styles";
import { breakpoints } from "./variables";
import URWGeometricRegularWoff from "../../public/webfonts/3464D4_3_0.woff";
import URWGeometricRegularWoff2 from "../../public/webfonts/3464D4_3_0.woff2";
import URWGeometricRegularTTF from "../../public/webfonts/3464D4_3_0.ttf";

const palette = {
  blue: "#169BD5",
  darkBlue: "#0364AA",
  darkerBlue: "#035088",
  white: "#FFFFFF",
  lightBlue: "#5DD2F9",
  green: "#01781C",
  yellow: "#FFC107",
  orange: "#ed923d",
  red: "#fb3015",
  darkCharcoal: "#2B3536",
  mediumCharcoal: "#354141",
  lightCharcoal: "#3D4949",
  darkerGrey: "#666666",
  darkGrey: "#8C949A",
  grey: "#AAB4BC",
  lightGrey: "#CED4DA",
  lighterGrey: "#EEF0F2",
  portalTheme: "rgb(3, 100, 170)",
};

const spacing = 8;

export default {
  typography: {
    fontSize: 14,
    fontWeight: 400,
    button: {
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: 500,
    },
    h1: {
      fontSize: "2rem",
      fontWeight: 300,
      lineHeight: 1.5,
      marginTop: "0.5rem",
      marginBottom: "1.25rem",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 300,
      lineHeight: 1.5,
      marginTop: "1.25rem",
      marginBottom: "0.75rem",
    },
    h3: {
      fontSize: "1.35rem",
      fontWeight: 300,
      lineHeight: 1.5,
      marginTop: "1.25rem",
      marginBottom: "0.5rem",
    },
    h4: {
      fontSize: "1.15rem",
      fontWeight: 300,
      lineHeight: 1.5,
      marginTop: "1rem",
      marginBottom: "0.5rem",
    },
    h5: {
      fontSize: "1.15rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      marginTop: "0.5rem",
    },
    subtitle2: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      marginTop: "0.5rem",
    },
  },
  statusColours: {
    draft: palette.lightGrey,
    submitted: palette.lightBlue,
    issued: palette.green,
    onHold: palette.yellow,
    closed: palette.red,
    assessment: palette.darkBlue,
    requestedInfo: palette.green,
    active: palette.green,
    archived: palette.darkGrey,
    migrated: palette.darkCharcoal,
    activated: palette.green,
    deactivated: palette.red,
    awaitingActivation: palette.blue,
    awaitingAcceptance: palette.orange,
  },
  palette: {
    primary: {
      main: palette.portalTheme,
    },
    secondary: {
      main: palette.red,
    },
    error: {
      main: palette.red,
    },
    white: {
      main: palette.white,
    },
    background: {
      default: palette.white,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body: {
          fontSize: '1rem';
          lineHeight: 1.43;
          letterSpacing: '0.01071em';
        }
        @font-face {
          font-family: 'URWGeometric-Regular';
          src: url('webfonts/3464D4_3_0.eot');
          src: url('webfonts/3464D4_3_0.eot?#iefix') format('embedded-opentype'),
            url(${URWGeometricRegularWoff2}) format('woff2'),
            url(${URWGeometricRegularWoff}) format('woff'),
            url(${URWGeometricRegularTTF}) format('truetype');
        }
      `,
    },
    MuiFilledInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
      styleOverrides: {
        contained: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        sizeSmall: {
          // Adjust spacing to reach minimal touch target hitbox
          marginLeft: 4,
          marginRight: 4,
          padding: 12,
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: "#fff",
          backgroundColor: "#000",
        },
      },
    },
    MUIDataTableBodyCell: {
      styleOverrides: {
        root: {
          minWidth: 70,
          maxWidth: 300,
          lineHeight: 2,
        },
      },
    },
    MUIDataTableFilter: {
      styleOverrides: {
        gridListTile: {
          marginTop: "0px",
        },
      },
    },
    MUIDataTablePagination: {
      styleOverrides: {
        navContainer: {
          justifyContent: "center",
        },
        selectRoot: {
          paddingTop: "7px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          marginTop: 8,
          marginBottom: 8,
        },
      },
    },
    MuiGridListTile: {
      styleOverrides: {
        root: {
          padding: "5px 10px !important",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid " + palette.grey,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          flexWrap: "nowrap",
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: "flex-start",
          margin: spacing,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "0.5rem",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: "0.9rem",
          "&.Mui-active": {
            fontWeight: "500 !important",
          },
          "&.Mui-completed": {
            fontWeight: 400,
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        switchViewButton: {
          padding: 4,
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        button: {
          padding: 4,
        },
      },
    },
  },
  breakpoints: {
    values: breakpoints,
  },
} as DeprecatedThemeOptions;
