import React, { createContext, useContext, useState, useEffect } from "react";

import useStorage from "../utils/useStorage";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useStorage("FireSpotsToken");

  useEffect(() => {
    const storagedUser = localStorage.getItem("@FireSpotsToken:user");
    const storagedToken = localStorage.getItem("@FireSpotsToken:token");

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  function logout() {
    setUser(null);

    localStorage.removeItem("@FireSpotsToken:user");
    localStorage.removeItem("@FireSpotsToken:token");
  }

  async function login(email, password) {
    // const response = await firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .catch((err) => {
    //     console.log(err);
    //   });

    if ("response") {
      window.location.href = "/home";

      const user = {
        email: " response.user.email",
        token: "response.user.uid",
      };

      setUser(user);
      setToken("response.user.uid");

      localStorage.setItem("@FireSpotsToken:user", JSON.stringify(user));
      localStorage.setItem("@FireSpotsToken:token", user.token);
    } else {
      return alert("Falha nas credenciais.");
    }
  }

  async function signUp(email, password) {
    // const response = await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .catch((err) => console.log(err));

    window.location.href = "/home";

    const user = {
      email: "response.user.email",
      token: "response.user.uid",
    };
    setUser(user);

    localStorage.setItem("@FireSpotsToken:user", JSON.stringify(user));
    localStorage.setItem("@FireSpotsToken:token", user.token);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        user,
        login,
        logout,
        signUp,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
