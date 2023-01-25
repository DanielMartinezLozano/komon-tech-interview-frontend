import { ReactElement } from "react";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

const SocialMediaTable = () => {
  const socialMediaPlatforms: SocialMediaTableItem[] = [
    {
      text: "Twitter",
      icon: <TwitterIcon className=" stroke-black" />,
    },
    {
      text: "Discord",
      icon: <DiscordIcon className=" stroke-black" />,
    },
    {
      text: "Instagram",
      icon: <InstagramIcon className=" stroke-black" />,
    },
  ];

  return (
    <div className="shadow-xl rounded-xl p-6 bg-white">
      <h2>Social Media</h2>
      <ul>
        {socialMediaPlatforms.map((platform) => (
          <li key={platform.text} className="my-6">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-4">
                {platform.icon}
                <p>{platform.text}</p>
              </span>
              <button className="rounded bg-slate-100 hover:bg-slate-50">
                Connect
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaTable;
