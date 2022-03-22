import { Navigate } from "react-router-dom";

function PrivateRouteBudget({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? children : <Navigate to="/budget/login" />;
}

export default PrivateRouteBudget;
