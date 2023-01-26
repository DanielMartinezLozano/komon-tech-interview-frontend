import userFixture from "@/pages/api/fixtures/user.fixture";
import { API_ENDPOINT_CONSTANTS } from "core/constants/constants";
import { useAuth } from "hooks/useAuth";
import { useLocalStorage } from "hooks/useLocalStorage";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

const UserContext = createContext<User>(null);
const SetUserContext = createContext<Dispatch<SetStateAction<User>>>(
  (value) => {
    // Mocked login
  }
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useAuth();
  return (
    <>
      <UserContext.Provider value={user}>
        <SetUserContext.Provider value={setUser}>
          {children}
        </SetUserContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}

export function useSetUserContext() {
  return useContext(SetUserContext);
}
