import Head from "next/head";
import KomonLogo from "../icons/KomonLogo";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Komon Tech Interview Frontend</title>

        <meta name="title" content="Komon Tech Interview Frontend" />
        <meta
          name="description"
          content="Next JS project made by Daniel Martinez for the Komon Tech Interview"
        />
        <meta name="author" content="Daniel Martinez" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        <meta property="og:title" content="Komon Tech Interview Frontend" />
        <meta
          property="og:description"
          content="Next JS project made by Daniel Martinez for the Komon Tech Interview"
        />
        <meta property="og:image" content="#" />
        <meta property="twitter:card" content="#" />
        <meta property="twitter:url" content="#" />
        <meta
          property="twitter:title"
          content="Komon Tech Interview Frontend"
        />
        <meta
          property="twitter:description"
          content="Next JS project made by Daniel Martinez for the Komon Tech Interview"
        />
        <meta property="twitter:image" content="#" />
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
