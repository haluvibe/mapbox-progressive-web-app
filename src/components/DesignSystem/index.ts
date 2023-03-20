// We have disabled this as Tom and myself (Paul) have spent far too long getting the typescript to work here for minimal value as the typescript works correctly where the components are consumed.
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { withBackwardsCompatibleTheme } from "./withBackwardsCompatibleTheme";
import * as Global from "./Library";
import * as Portal from "./Portal";

type DesignSystem = typeof Global &
  typeof Portal & {
    OldThemeBox: {
      (props: Global.BoxProps): JSX.Element;
      displayName: string;
    };
  };

const { Box, ...globalProperties } = { ...Global };

const { useFormService, useFormContext, RawFormProvider, ...portalProperties } =
  {
    ...Portal,
  };

// Apply backwards compatibility to each component in Global
Object.keys(Global).forEach((key) => {
  globalProperties[key] = withBackwardsCompatibleTheme(Global[key], {
    useSelectedTheme: true,
  });
});

// Do the same for the Portal namespace
Object.keys(Portal).forEach((key) => {
  portalProperties[key] = withBackwardsCompatibleTheme(Portal[key], {
    useSelectedTheme: true,
  });
});

// Combine the modified objects into a single export
const DS = {
  ...globalProperties,
  ...portalProperties,
  RawFormProvider,
  OldThemeBox: withBackwardsCompatibleTheme(Box, {
    forceTheme: "old",
  }),
} as DesignSystem;

export { DS, useFormService, useFormContext };
