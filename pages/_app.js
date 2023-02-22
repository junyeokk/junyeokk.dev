import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "../components/google-analytics/google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
