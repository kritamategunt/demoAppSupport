import { useState, useEffect } from "react";
import { AccountInfo, PublicClientApplication } from "@azure/msal-browser";
import { msalInstance } from "./msalConfig";

const useMsal = (): {
  isAuthenticated: boolean;
  user: AccountInfo | null;
  login: () => Promise<void>;
  logout: () => void;
} => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AccountInfo | null>(null);

  useEffect(() => {
    const accounts = msalInstance.getAllAccounts();

    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
      setIsAuthenticated(true);
      setUser(accounts[0]);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  const login = async () => {
    console.log("Login")
    try {
     const res =  await msalInstance.loginPopup();
      setIsAuthenticated(true);
      setUser(res.account);
      console.log("Login Success set user")
      console.log({"Login Success set user":res})
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  const logout = () => {
    msalInstance.logoutPopup();
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
};

export default useMsal;
