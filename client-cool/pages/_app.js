import "../styles/globals.css";
import Layout from "../components/layouts/layout";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
