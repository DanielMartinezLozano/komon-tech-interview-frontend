import { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

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
          <div className="grid gap-6">
            <span className="flex items-center gap-2 pt-4">
              <button onClick={() => handleSelectSocialMedia(null)}>
                <ChevronIcon />
              </button>
              <h3>Sign in with {socialMediaSelected.text}</h3>
              {socialMediaSelected.icon}
            </span>
            <input
              data-testid="input-email"
              type="email"
              id="email"
              className="bg-dark-05 text-dark-20 focus:text-dark-75 p-3 pl-10 h-11  border-dark-20 border border-solid text-sm rounded-lg leading-tight font-euclid-triangle block w-full placeholder-asphalt"
              placeholder="Username or E-mail"
            />
            <input
              data-testid="input-password"
              type="password"
              id="password"
              className="bg-dark-05 text-dark-20 focus:text-dark-75 p-3 pl-10 h-11  border-dark-20 border border-solid text-sm rounded-lg leading-tight font-euclid-triangle block w-full placeholder-asphalt"
              placeholder="Password"
            ></input>
            <button
              type="button"
              data-testid="user-login-module-login-button"
              className="w-full text-white bg-black border border-transparent hover:bg-drak-75 focus:ring-drak-20 disabled:hover:bg-dark-05 focus:ring-4 group flex items-center justify-center py-2 text-center font-medium focus:z-10 rounded-lg dark:border-solid dark:border-white font-euclid-triangle"
            >
              Log in
            </button>
          </div>
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
