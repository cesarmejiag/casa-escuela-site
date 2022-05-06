import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      transition={{ duration: 0.75, times: [0, 0.2, 1] }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
