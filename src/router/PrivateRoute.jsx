import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
