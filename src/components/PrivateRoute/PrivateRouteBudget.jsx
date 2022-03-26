import { Navigate } from "react-router-dom";

function PrivateRouteBudget({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRouteBudget;
