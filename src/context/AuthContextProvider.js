import React, { createContext, useContext, useState, useEffect } from "react";
import fire from "../fire";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();

  // ! REGISTER
  const handleRegister = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => setHasAccount(true))
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
          default:
            break;
        }
      });
  };

  // ! LOGIN
  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
          default:
            break;
        }
      });
  };

  // ! LOGOUT
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  // ? authListener -  вызвается 1 раз при рождении компонента
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <authContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        user,
        emailError,
        passwordError,
        handleRegister,
        handleLogin,
        handleLogOut,
        hasAccount,
        setHasAccount,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

//  если мы хотим открыть ошибку, то используем catch

// ? createUserWithEmailAndPassword - принимает 2 параметра:  1) состояние email и  2) состояние password
// валидация - ловля ошибок//
// ? Object.values - вытаскивает значение
