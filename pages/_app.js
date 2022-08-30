import { ParallaxProvider } from "react-scroll-parallax";
import Cursor from "../components/Cursor";
import { AppProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <AppProvider>
        <Cursor />
        <Component {...pageProps} />
      </AppProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
