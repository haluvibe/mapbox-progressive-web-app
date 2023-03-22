import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "../src/theming/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { ThemeSelectionProvider } from "../src/theming/ThemeSelectionProvider";
import { backwardsCompatibleThemes } from "../src/theming/themes";
import { PhotoProvider } from "../providers/PhotoProvider";
import AddToHomeScreen from "../components/AddToHomeScreen";

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
        <title>Next.js PWA Example</title>

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
          <PhotoProvider>
            <Component {...pageProps} />
          </PhotoProvider>
          <AddToHomeScreen />
        </ThemeProvider>
      </ThemeSelectionProvider>
    </>
  );
}
