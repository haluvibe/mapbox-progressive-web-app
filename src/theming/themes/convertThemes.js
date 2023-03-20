const fs = require('fs/promises');

async function readTheme(name) {
  try {
    const data = await fs.readFile(
      `./src/app/theming/themes/figma/${name}.json`,
      {
        encoding: 'utf8',
      },
    );
    const {theme} = JSON.parse(data);
    return theme;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function readGlobalValues() {
  try {
    const data = await fs.readFile(
      './src/app/theming/themes/figma/global.json',
      {
        encoding: 'utf8',
      },
    );
    const {global} = JSON.parse(data);
    return global;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function convertThemeValues(theme, mode, name) {
  const global = await readGlobalValues();

  const pixelToRem = pixelValue => {
    let pixelFloat;
    if (isNaN(pixelValue)) {
      pixelFloat = parseFloat(pixelValue.substring(0, pixelValue.length - 2));
    } else {
      pixelFloat = pixelValue;
    }
    const equivalentRemValue = `${
      pixelFloat / global.fontSizes.htmlFontSize.value
    }rem`;
    return equivalentRemValue;
  };

  try {
    return JSON.stringify(
      {
        typography: {
          htmlFontSize: global.fontSizes.htmlFontSize.value,
          fontFamily: global.fontFamilies.primary.value,
          fontSize: global.fontSizes.fontSize.value,
          fontWeightLight: global.fontWeights.fontWeightLight.value,
          fontWeightRegular: global.fontWeights.fontWeightRegular.value,
          fontWeightMedium: global.fontWeights.fontWeightMedium.value,
          fontWeightBold: global.fontWeights.fontWeightBold.value,
          h1: {
            fontSize: pixelToRem(theme.typography.elements.h1.value.fontSize),
            lineHeight: pixelToRem(
              theme.typography.elements.h1.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.h1.value.letterSpacing,
            ),
            ...theme.typography.elements.h1.value,
          },
          h2: {
            ...theme.typography.elements.h2.value,
            fontSize: pixelToRem(theme.typography.elements.h2.value.fontSize),
            lineHeight: pixelToRem(
              theme.typography.elements.h2.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.h2.value.letterSpacing,
            ),
          },
          h3: {
            ...theme.typography.elements.h3.value,
            fontSize: pixelToRem(theme.typography.elements.h3.value.fontSize),
            lineHeight: pixelToRem(
              theme.typography.elements.h3.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.h3.value.letterSpacing,
            ),
          },
          h4: {
            ...theme.typography.elements.h4.value,
            fontSize: pixelToRem(theme.typography.elements.h4.value.fontSize),
            lineHeight: pixelToRem(
              theme.typography.elements.h4.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.h4.value.letterSpacing,
            ),
          },
          h5: {
            ...theme.typography.elements.h5.value,
            fontSize: pixelToRem(theme.typography.elements.h5.value.fontSize),
            lineHeight: pixelToRem(
              theme.typography.elements.h5.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.h5.value.letterSpacing,
            ),
          },
          h6: {
            ...theme.typography.elements.h6.value,
            fontSize: pixelToRem(theme.typography.elements.h6.value.fontSize),
            lineHeight: pixelToRem(
              theme.typography.elements.h6.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.h6.value.letterSpacing,
            ),
          },
          body1: {
            ...theme.typography.elements.body1.value,
            fontSize: pixelToRem(
              theme.typography.elements.body1.value.fontSize,
            ),
            lineHeight: pixelToRem(
              theme.typography.elements.body1.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.body1.value.letterSpacing,
            ),
          },
          body2: {
            ...theme.typography.elements.body2.value,
            fontSize: pixelToRem(
              theme.typography.elements.body2.value.fontSize,
            ),
            lineHeight: pixelToRem(
              theme.typography.elements.body2.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.body2.value.letterSpacing,
            ),
          },
          subtitle1: {
            ...theme.typography.elements.subtitle1.value,
            fontSize: pixelToRem(
              theme.typography.elements.subtitle1.value.fontSize,
            ),
            lineHeight: pixelToRem(
              theme.typography.elements.subtitle1.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.subtitle1.value.letterSpacing,
            ),
          },
          subtitle2: {
            ...theme.typography.elements.subtitle2.value,
            fontSize: pixelToRem(
              theme.typography.elements.subtitle2.value.fontSize,
            ),
            lineHeight: pixelToRem(
              theme.typography.elements.subtitle2.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.subtitle2.value.letterSpacing,
            ),
          },
          caption: {
            ...theme.typography.elements.caption.value,
            fontSize: pixelToRem(
              theme.typography.elements.caption.value.fontSize,
            ),
            lineHeight: pixelToRem(
              theme.typography.elements.caption.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.caption.value.letterSpacing,
            ),
          },
          overline: {
            ...theme.typography.elements.overline.value,
            fontSize: pixelToRem(
              theme.typography.elements.overline.value.fontSize,
            ),
            lineHeight: pixelToRem(
              theme.typography.elements.overline.value.lineHeight,
            ),
            letterSpacing: pixelToRem(
              theme.typography.elements.overline.value.letterSpacing,
            ),
          },
        },
        shape: {
          // borderRadius: global.borderRadius.value,
          borderRadius: 4,
        },
        palette: {
          mode,
          primary: {
            main: theme.colors.primary.main.value,
            light: theme.colors.primary.light.value,
            dark: theme.colors.primary.dark.value,
            contrastText: theme.colors.primary.contrast.value,
          },
          secondary: {
            main: theme.colors.secondary.main.value,
            light: theme.colors.secondary.light.value,
            dark: theme.colors.secondary.dark.value,
            contrastText: theme.colors.secondary.contrast.value,
          },
          error: {
            main: theme.colors.error.main.value,
            light: theme.colors.error.light.value,
            dark: theme.colors.error.dark.value,
            contrastText: theme.colors.error.contrast.value,
          },
          info: {
            main: theme.colors.info.main.value,
            light: theme.colors.info.light.value,
            dark: theme.colors.info.dark.value,
            contrastText: theme.colors.info.contrast.value,
          },
          warning: {
            main: theme.colors.warning.main.value,
            light: theme.colors.warning.light.value,
            dark: theme.colors.warning.dark.value,
            contrastText: theme.colors.warning.contrast.value,
          },
          success: {
            main: theme.colors.success.main.value,
            light: theme.colors.success.light.value,
            dark: theme.colors.success.dark.value,
            contrastText: theme.colors.success.contrast.value,
          },
          coolGrey: {
            main: theme.colors.coolGrey.main.value,
            light: theme.colors.coolGrey.light.value,
            dark: theme.colors.coolGrey.dark.value,
            contrastText: theme.colors.coolGrey.contrast.value,
          },
          action: {
            active: theme.colors.action.active.value,
            hover: theme.colors.action.hover.value,
            selected: theme.colors.action.selected.value,
            disabled: theme.colors.action.disabled.value,
            disabledBackground: theme.colors.action.disabledBackground.value,
            focus: theme.colors.action.focus.value,
          },
          background: {
            default: theme.colors.background.default.value,
            paper: theme.colors.background.paper.value,
          },
          text: {
            primary: theme.colors.text.primary.value,
            secondary: theme.colors.text.secondary.value,
            disabled: theme.colors.text.disabled.value,
          },
          divider: theme.colors.other.divider.value,
        },
        sizes: {
          XS: pixelToRem(global.spacing['xs'].value),
          SM: pixelToRem(global.spacing['sm'].value),
          MD: pixelToRem(global.spacing['md'].value),
          LG: pixelToRem(global.spacing['lg'].value),
          XL: pixelToRem(global.spacing['xl'].value),
        },
        breakpoints: {
          values: {
            xs: global.breakPoints['xs'].value,
            sm: global.breakPoints['sm'].value,
            md: global.breakPoints['md'].value,
            lg: global.breakPoints['lg'].value,
            xl: global.breakPoints['xl'].value,
          },
        },
        statusColours: {
          draft: theme.colors.status.draft.value,
          submitted: theme.colors.status.submitted.value,
          issued: theme.colors.status.issued.value,
          onHold: theme.colors.status.onHold.value,
          closed: theme.colors.status.closed.value,
          assessment: theme.colors.status.underAssessment.value,
          requestedInfo: theme.colors.status.requestedInfo.value,
          active: theme.colors.status.active.value,
          archived: theme.colors.status.archived.value,
          migrated: theme.colors.status.migrated.value,
          activated: theme.colors.status.activated.value,
          deactivated: theme.colors.status.deactivated.value,
          awaitingActivation: theme.colors.status.awaitingActivation.value,
          awaitingAcceptance: theme.colors.status.awaitingAcceptance.value,
        },
        mapBox: {
          primary: theme.colors.mapbox.primary.value,
          secondary: theme.colors.mapbox.secondary.value,
          secondaryHover: theme.colors.mapbox.secondaryHover.value,
          info: theme.colors.mapbox.info.value,
          action: theme.colors.mapbox.action.value,
          accent: theme.colors.mapbox.accent.value,
          darkAccent: theme.colors.mapbox.darkAccent.value,
          success: theme.colors.mapbox.success.value,
          positive: theme.colors.mapbox.positive.value,
          error: theme.colors.mapbox.error.value,
          warning: theme.colors.mapbox.warning.value,
          tint1: theme.colors.mapbox.tint1.value,
          tint2: theme.colors.mapbox.tint2.value,
          tint3: theme.colors.mapbox.tint3.value,
          tint4: theme.colors.mapbox.tint4.value,
          tint5: theme.colors.mapbox.tint5.value,
          tint6: theme.colors.mapbox.tint6.value,
          tint7: theme.colors.mapbox.tint7.value,
          tint8: theme.colors.mapbox.tint8.value,
          tint9: theme.colors.mapbox.tint9.value,
          disabled: theme.colors.mapbox.disabled.value,
          pink: theme.colors.mapbox.pink.value,
          darkPink: theme.colors.mapbox.darkPink.value,
          green: theme.colors.mapbox.green.value,
          statusPublished: theme.colors.status.published.value,
          gray: theme.colors.mapbox.gray.value,
          networkApproved: theme.colors.mapbox.networkApproved.value,
          networkApprovedWithCondition:
            theme.colors.mapbox.networkApprovedWithCondition.value,
          networkRestricted: theme.colors.mapbox.networkRestricted.value,
          statusRoads: theme.colors.status.roads.value,
          unmanagedRoads: theme.colors.mapbox.unmanagedRoads.value,
          white: theme.colors.mapbox.white.value,
          statusNew: theme.colors.status.new.value,
          statusPendingUpdate: theme.colors.status.pendingUpdates.value,
          archived: theme.colors.status.archived.value,
        },
        components: {},
      },
      null,
      2,
    );
  } catch (err) {
    console.log(err);
    console.log(name);
  }
}

async function transformTheme(name) {
  try {
    const theme = await readTheme(name);
    const mode = name === 'dark' ? 'dark' : 'light';
    const transformedTheme = await convertThemeValues(theme, mode, name);
    await fs.writeFile(
      `./src/app/theming/themes/generated/${name}Theme.json`,
      transformedTheme,
    );
  } catch (err) {
    console.log(err);
    console.log(name);
  }
}

function transformThemes() {
  try {
    const themes = ['light', 'dark', 'old'];
    themes.forEach(theme => {
      transformTheme(theme);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

transformThemes();
