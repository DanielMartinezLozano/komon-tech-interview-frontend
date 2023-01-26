import { useSetUserContext } from "context/AuthContext";
import { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";

const LoginModal = ({ socialMediaSelected, handleSelectSocialMedia }) => {
  const login = useSetUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (username, password) => {
    await login({
      id: 1,
      name: "Daniel Martinez",
      email: username,
      password,
    });
    handleSelectSocialMedia(null);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
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
        onChange={handleChangeEmail}
      />
      <input
        data-testid="input-password"
        type="password"
        id="password"
        className="bg-dark-05 text-dark-20 focus:text-dark-75 p-3 pl-10 h-11  border-dark-20 border border-solid text-sm rounded-lg leading-tight font-euclid-triangle block w-full placeholder-asphalt"
        placeholder="Password"
        onChange={handleChangePassword}
      ></input>
      <button
        type="submit"
        data-testid="user-login-module-login-button"
        className="w-full text-white bg-black border border-transparent hover:bg-drak-75 focus:ring-drak-20 disabled:hover:bg-dark-05 focus:ring-4 group flex items-center justify-center py-2 text-center font-medium focus:z-10 rounded-lg dark:border-solid dark:border-white font-euclid-triangle"
        onClick={() => handleLogin(email, password)}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginModal;
