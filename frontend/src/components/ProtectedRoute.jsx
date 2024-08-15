import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../userContext/AuthContext.jsx";

function ProtectedRoute({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);

  const location = useLocation();

  if (!authUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedRoute;
