
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Customer } from "./constants";


interface AuthContextType {
  user: Customer;
  setUser: React.Dispatch<React.SetStateAction<Customer>>;
}

const defaultUser: Customer = {
  id: null,
  name: null,
  title: null,
  address: null,
};

const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  setUser: () => {},
});

const AuthProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [user, setUser] = useState<Customer>(defaultUser);

  const authContextValue: AuthContextType = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextType => useContext(AuthContext);

export { AuthProvider, useAuth };

