import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminAuthContext } from "../../context/AdminAccountContext";

function PrivateRoute({ children }) {
  // const { isAuthenticated } = useContext(AdminAuthContext);
  const isAuthenticated = localStorage.getItem("isAuthenticatedBank");

  return isAuthenticated ? children : <Navigate to="/banking/login" />;
}

export default PrivateRoute;
