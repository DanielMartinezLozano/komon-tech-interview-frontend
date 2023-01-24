import Head from "next/head";
import KomonLogo from "@/components/icons/KomonLogo";
import TwitterIcon from "@/components/icons/TwitterIcon";
import { ReactComponentElement, ReactElement } from "react";
import DiscordLogo from "@/components/icons/DiscordIcon";
import DiscordIcon from "@/components/icons/DiscordIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import SocialMediaTable from "@/components/SocialMediaTable";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/connections">
        <div className="shadow-lg text-center py-8 px-4 my-8 rounded-lg bg-indigo-400">
          <h3 className="font-bold text-xl">Connections</h3>
        </div>
      </Link>
      <Link href="/content">
        <div className="shadow-lg text-center py-8 px-4 my-8 rounded-lg bg-indigo-400">
          <h3 className="font-bold text-xl">Content</h3>
        </div>
      </Link>
    </div>
  );
}
