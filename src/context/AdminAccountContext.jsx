import { createContext, useEffect, useState } from "react";
import {
  getAdminAccounts,
  updateAdminAccounts,
  updateAdminAuthentication,
} from "../services/LocalStorage";
import { useNavigate } from "react-router-dom";

export const AdminAuthContext = createContext();

function AdminAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminAccounts, setAdminAccounts] = useState(getAdminAccounts());

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticatedBank"));
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticatedBank", isAuthenticated);
  }, [isAuthenticated]);

  const login = username => {
    const selectedAccount = adminAccounts.find(
      adminAccount => adminAccount.username === username
    );

    selectedAccount.isLoggedIn = true;

    const updatedAccounts = adminAccounts.map(adminAccount =>
      adminAccount.username === username ? { ...selectedAccount } : adminAccount
    );

    setAdminAccounts(updatedAccounts);
    updateAdminAccounts(updatedAccounts);

    setIsAuthenticated(true);
    updateAdminAuthentication(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    updateAdminAuthentication(false);
  };

  return (
    <AdminAuthContext.Provider value={(isAuthenticated, login, logout)}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuth;
