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
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
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
