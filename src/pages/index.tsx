import Head from "next/head";
import KomonLogo from "@/components/icons/KomonLogo";
import TwitterIcon from "@/components/icons/TwitterIcon";
import { ReactComponentElement, ReactElement } from "react";
import DiscordLogo from "@/components/icons/DiscordIcon";
import DiscordIcon from "@/components/icons/DiscordIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import SocialMediaTable from "@/components/SocialMediaTable";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Komon Tech Interview Frontend</title>
      </Head>

      <main className="shadow-lg min-h-screen">
        <header className="border-b-2">
          <KomonLogo className="h-auto max-w-xs" />
        </header>
        <body className="px-4">
          <h1 className="my-6">Connect</h1>

          <SocialMediaTable />
        </body>
      </main>

      <footer></footer>
    </div>
  );
}
