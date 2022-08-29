import Cursor from "../components/Cursor";
import { AppProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Cursor />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
