import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export { RequireAuth };
