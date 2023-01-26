import App, { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { AuthProvider } from "context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;
