import { Navigate } from "react-router-dom";

function PrivateRouteBudget({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticatedBudget");

  return isAuthenticated ? children : <Navigate to="/budget/login" />;
}

export default PrivateRouteBudget;
