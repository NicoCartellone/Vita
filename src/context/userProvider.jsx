import { createContext, useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(true);
  };

  const logOut = () => {
    setUser(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

export const UserContext = createContext();
