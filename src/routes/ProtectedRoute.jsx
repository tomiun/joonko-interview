import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";

const getCookie = (cookieName) => {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
};

const ProtectedRoute = ({ children }) => {
  const { push } = useHistory();
  const isLoggedIn = useMemo(() => !!getCookie("_user_session"), []);

  useEffect(() => {
    if (!isLoggedIn) push("/login");
  }, [push, isLoggedIn]);

  return <>{isLoggedIn && children}</>;
};

export default ProtectedRoute;
