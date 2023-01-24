import Head from "next/head";
import KomonLogo from "../icons/KomonLogo";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Komon Tech Interview Frontend</title>
      </Head>

      <main className="shadow-lg min-h-screen">
        <header className="border-b-2">
          <KomonLogo className="h-auto max-w-xs" />
        </header>

        <body className="px-4">{children}</body>

        <footer></footer>
      </main>
    </>
  );
};

export default Layout;
