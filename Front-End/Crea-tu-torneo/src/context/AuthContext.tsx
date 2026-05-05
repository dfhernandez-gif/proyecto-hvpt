import { createContext, useContext, useState } from 'react';
import authService from '../services/authService';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(authService.currentUser());

  const login = (email: string, password: string) => {
    const logged = authService.login(email, password);
    setUser(logged);
    return logged;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
