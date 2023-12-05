import { createContext, useContext, useState } from "react";
import axios from "./axios";

type UserProps = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  password: string;
  remember_token: string;
  role: string;
  created_at: string;
  updated_at: string;
};

// type SettingsProps = {
//   name: string;
//   email: string;
//   password: string;
//   token: string;
//   role: string;
//   _id: string;
//   createdAt: string;
//   updatedAt: string;
// };

const AuthContent = createContext<{
  user: UserProps | null;
  setUser: (user: UserProps) => void;
  csrfToken: () => Promise<boolean>;
}>({
  user: null,
  setUser: () => {},
  csrfToken: () => {},
});

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, _setUser] = useState<UserProps>({
    name: "",
    email: "",
    password: "",
    token: "",
    role: "",
    _id: "",
    createdAt: "",
    updatedAt: "",
  });
  // const [settings, setSettings] = useState<SettingsProps>();

  // set user to local storage
  const setUser = (user: UserProps) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    _setUser(user);
  };

  // csrf token generation for guest methods
  const csrfToken = async () => {
    await axios.get("/sanctum/csrf-cookie");
    return true;
  };

  return (
    <AuthContent.Provider value={{ setUser, csrfToken, user }}>
      {children}
    </AuthContent.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContent);
};

export { AuthProvider, useAuth };
