import Head from "next/head";
import KomonLogo from "../icons/KomonLogo";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Komon Tech Interview Frontend</title>
      </Head>

      <section className="shadow-lg min-h-screen">
        <header className="border-b-2 bg-white">
          <KomonLogo className="h-auto max-w-xs" />
        </header>

        <main className="px-4">{children}</main>

        <footer></footer>
      </section>
    </>
  );
};

export default Layout;
