import { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LoginModal from "../LoginModal";

const SocialMediaTable = () => {
  const [socialMediaSelected, setSocialMediaSelected] =
    useState<SocialMediaTableItem | null>(null);

  const handleSelectSocialMedia = (
    socialMediaPlatform: SocialMediaTableItem
  ) => {
    setSocialMediaSelected(socialMediaPlatform);
  };

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
        {socialMediaSelected ? (
          <LoginModal
            socialMediaSelected={socialMediaSelected}
            handleSelectSocialMedia={handleSelectSocialMedia}
          />
        ) : (
          socialMediaPlatforms.map((platform) => (
            <li key={platform.text} className="my-6">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-4">
                  {platform.icon}
                  <p>{platform.text}</p>
                </span>
                <button
                  onClick={() => handleSelectSocialMedia(platform)}
                  className="rounded bg-slate-100 hover:bg-slate-50"
                >
                  Connect
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SocialMediaTable;
