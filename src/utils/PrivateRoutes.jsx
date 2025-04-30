import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from "../utils/AuthRequired";

const PrivateRoute = ({ children }) => {
  const { authTokens } = useContext(AuthContext);
  return authTokens ? children : <Navigate to="/login" />;
};

export default PrivateRoute;