import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../Features/User/userSlice";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
