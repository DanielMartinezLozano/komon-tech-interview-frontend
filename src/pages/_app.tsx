import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
