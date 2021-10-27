import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  logIn: (idtoken) => {},
  logOut: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (Idtoken) => {
    setToken(Idtoken);
    setIsLoggedIn(true);
  };
  const logOutHandler = () => {
    setToken(null);
    setIsLoggedIn(false);
  };
  const authContextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    logIn: loginHandler,
    logOut: logOutHandler,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
