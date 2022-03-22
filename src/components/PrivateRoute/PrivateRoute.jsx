import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticatedBank");

  return isAuthenticated ? children : <Navigate to="/banking/login" />;
}

export default PrivateRoute;
