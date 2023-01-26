import userFixture from "@/pages/api/fixtures/user.fixture";
import { useLocalStorage } from "./useLocalStorage";

export function useAuth() {
  return useLocalStorage<User>("user", null);
}
