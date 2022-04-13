import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import Preloader from "../components/Preloader";

import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return <>{loading ? <Preloader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
