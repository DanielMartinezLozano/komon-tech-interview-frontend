import { useSetUserContext, useUserContext } from "context/AuthContext";
import { useState } from "react";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LoginModal from "../LoginModal";

const SocialMediaTable = () => {
  const user = useUserContext();
  const logout = useSetUserContext();
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
      available: false,
    },
    {
      text: "Discord",
      icon: <DiscordIcon className=" stroke-black" />,
      available: false,
    },
    {
      text: "Instagram",
      icon: <InstagramIcon className=" stroke-black" />,
      available: true,
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
                {user && platform.available && (
                  <button
                    onClick={() => logout(null)}
                    className="rounded bg-red-300 text-red-900 border-red-900 hover:bg-red-400 "
                  >
                    Disconnect
                  </button>
                )}
                {!user && platform.available && (
                  <button
                    onClick={() => handleSelectSocialMedia(platform)}
                    className="rounded bg-slate-100 hover:bg-slate-50"
                  >
                    Connect
                  </button>
                )}
                {!platform.available && (
                  <p className=" text-gray-500">Available soon</p>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SocialMediaTable;
