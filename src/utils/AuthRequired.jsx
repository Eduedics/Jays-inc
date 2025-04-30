import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    return access && refresh ? { access, refresh } : null;
  });

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('access');
    return token ? jwtDecode(token) : null;
  });

  const [loading, setLoading] = useState(true);

  const loginUser = (tokens) => {
    setAuthTokens(tokens);
    setUser(jwtDecode(tokens.access));
    localStorage.setItem('access', tokens.access);
    localStorage.setItem('refresh', tokens.refresh);
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authTokens, user, loginUser, logoutUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;