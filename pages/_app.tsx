import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
import theme from "../theme";


require("@solana/wallet-adapter-react-ui/styles.css");


export const cache = createCache({ key: "css", prepend: true });

const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <WalletConnectionProvider>
        <WalletBalanceProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </WalletBalanceProvider>
      </WalletConnectionProvider>
    </CacheProvider>
  );
}
export default MyApp;
