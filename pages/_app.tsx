import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "../src/theming/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { ThemeSelectionProvider } from "../src/theming/ThemeSelectionProvider";
import { backwardsCompatibleThemes } from "../src/theming/themes";
import { PhotoProvider } from "../providers/PhotoProvider";
import { MapProvider } from "../src/components/MapContext";
import "./global-styles.css";
import dynamic from "next/dynamic";

const AddToHomeScreen = dynamic(() => import("../components/AddToHomeScreen"), {
  ssr: false,
});

const UpdatePWA = dynamic(() => import("../components/UpdatePWA"), {
  ssr: false,
});

const DevicesProvider = dynamic(() => import("../providers/DevicesProvider"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>NHVR PWA Mapbox POC</title>

        <link rel="manifest" href="/manifest.json" />
        {/* Todo <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        /> */}
      </Head>
      <ThemeSelectionProvider
        availableThemes={backwardsCompatibleThemes}
        defaultTheme={"light"}
      >
        <ThemeProvider>
          <CssBaseline />
          <MapProvider>
            <DevicesProvider>
              <PhotoProvider>
                <Component {...pageProps} />
              </PhotoProvider>
            </DevicesProvider>
          </MapProvider>
          <AddToHomeScreen />
          <UpdatePWA />
        </ThemeProvider>
      </ThemeSelectionProvider>
    </>
  );
}
