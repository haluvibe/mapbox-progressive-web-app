import { ThemeOptions, Theme } from "@mui/material/styles";
import { PaletteColor } from "@mui/material";

const spacing = 8;

export const getDesignTokens = (
  theme: Theme,
  backwardsCompatible = false
): ThemeOptions =>
  ({
    typography: theme.typography,
    palette: {
      mode: theme.palette.mode,
      primary: theme.palette.primary,
      secondary: theme.palette.secondary,
      error: theme.palette.error,
      info: theme.palette.info,
      warning: theme.palette.warning,
      success: theme.palette.success,
      coolGrey: theme.palette.coolGrey,
      action: theme.palette.action,
      background: theme.palette.background,
      text: theme.palette.text,
      divider: theme.palette.divider,
    },
    shape: {
      borderRadius: theme.shape.borderRadius,
    },
    breakpoints: {
      values: theme.breakpoints.values,
    },
    sizes: theme.sizes,
    mapBox: theme.mapBox,
    statusColours: theme.statusColours,
    components: !backwardsCompatible
      ? {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'URWGeometric-Regular';
                src: url('webfonts/3464D4_3_0.eot');
                src: url('webfonts/3464D4_3_0.eot?#iefix') format('embedded-opentype'),
                  url(webfonts/3464D4_3_0.woff) format('woff2'),
                  url(webfonts/3464D4_3_0.woff2) format('woff'),
                  url(webfonts/3464D4_3_0.ttf) format('truetype');
              }
            `,
          },
          ...theme.components,
        }
      : {
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
                  url(webfonts/3464D4_3_0.woff) format('woff2'),
                  url(webfonts/3464D4_3_0.woff2) format('woff'),
                  url(webfonts/3464D4_3_0.ttf) format('truetype');
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
          MUIDataTableSearch: {
            styleOverrides: {
              viewsSelectControl: {
                justifyContent: "center",
              },
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
          MuiTabs: {
            styleOverrides: {
              root: {
                borderBottom: "1px solid " + theme.palette.divider,
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
          MuiAppBar: {
            styleOverrides: {
              root: {
                borderTop: `6px solid ${theme.palette.primary.main}`,
                backgroundColor: theme.palette.background.paper,
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
                marginBottom: theme.sizes["SM"],
              },
              h1: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: theme.sizes["MD"],
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["SM"],
                },
              },
              h2: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: theme.sizes["MD"],
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["LG"],
                },
              },
              h3: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: theme.sizes["SM"],
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["MD"],
                },
              },
              h4: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: theme.sizes["SM"],
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["MD"],
                },
              },
              h5: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: theme.sizes["SM"],
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["SM"],
                },
              },
              h6: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: 0,
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["SM"],
                },
              },
              caption: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: theme.sizes["SM"],
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["SM"],
                },
              },
              subtitle1: {
                [`&.MuiTypography-gutterBottom`]: {
                  marginBottom: 0,
                },
                [`&.gutterTop`]: {
                  marginTop: theme.sizes["SM"],
                },
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
              root: {
                paddingLeft: 12,
                justifyContent: "space-between",
              },
              label: {
                marginRight: 0,
                whiteSpace: "nowrap",
              },
              labelContainer: {
                marginRight: 0,
              },
              switchViewButton: {
                padding: 2,
              },
            },
          },
          MuiPickersArrowSwitcher: {
            styleOverrides: {
              button: {
                padding: 2,
              },
            },
          },
          MuiPickersFadeTransitionGroup: {
            styleOverrides: {
              root: {
                display: "flex",
                alignItems: "center",
              },
            },
          },
        },
  } as ThemeOptions);

interface StatusColours {
  draft: React.CSSProperties["color"];
  submitted: React.CSSProperties["color"];
  issued: React.CSSProperties["color"];
  onHold: React.CSSProperties["color"];
  closed: React.CSSProperties["color"];
  assessment: React.CSSProperties["color"];
  requestedInfo: React.CSSProperties["color"];
  active: React.CSSProperties["color"];
  archived: React.CSSProperties["color"];
  migrated: React.CSSProperties["color"];
  activated: React.CSSProperties["color"];
  deactivated: React.CSSProperties["color"];
  awaitingAcceptance: React.CSSProperties["color"];
  awaitingActivation: React.CSSProperties["color"];
}

interface MapBoxColours {
  primary: React.CSSProperties["color"];
  secondary: React.CSSProperties["color"];
  secondaryHover: React.CSSProperties["color"];
  info: React.CSSProperties["color"];
  action: React.CSSProperties["color"];
  accent: React.CSSProperties["color"];
  darkAccent: React.CSSProperties["color"];
  success: React.CSSProperties["color"];
  positive: React.CSSProperties["color"];
  error: React.CSSProperties["color"];
  warning: React.CSSProperties["color"];
  tint1: React.CSSProperties["color"];
  tint2: React.CSSProperties["color"];
  tint3: React.CSSProperties["color"];
  tint4: React.CSSProperties["color"];
  tint5: React.CSSProperties["color"];
  tint6: React.CSSProperties["color"];
  tint9: React.CSSProperties["color"];
  tint8: React.CSSProperties["color"];
  tint7: React.CSSProperties["color"];
  disabled: React.CSSProperties["color"];
  pink: React.CSSProperties["color"];
  darkPink: React.CSSProperties["color"];
  green: React.CSSProperties["color"];
  statusPublished: React.CSSProperties["color"];
  gray: React.CSSProperties["color"];
  networkApproved: React.CSSProperties["color"];
  networkApprovedWithCondition: React.CSSProperties["color"];
  networkRestricted: React.CSSProperties["color"];
  statusRoads: React.CSSProperties["color"];
  unmanagedRoads: React.CSSProperties["color"];
  white: React.CSSProperties["color"];
  statusNew: React.CSSProperties["color"];
  statusPendingUpdate: React.CSSProperties["color"];
  archived: React.CSSProperties["color"];
}

declare module "@mui/material/styles" {
  interface Palette {
    coolGrey: PaletteColor;
  }

  interface Theme {
    statusColours: StatusColours;
    mapBox: MapBoxColours;
    sizes: {
      XS: string;
      SM: string;
      MD: string;
      LG: string;
      XL: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    statusColours: StatusColours;
    mapBox: MapBoxColours;
    sizes: {
      XS: string;
      SM: string;
      MD: string;
      LG: string;
      XL: string;
    };
  }
}

declare module "@mui/material/Chip" {
  export interface ChipPropsColorOverrides {
    coolGrey: true;
  }
}
