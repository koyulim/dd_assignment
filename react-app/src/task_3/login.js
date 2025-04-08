import React from "react";
import { useAuth } from "./authProvider";

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>
        {isAuthenticated ? "로그인 상태" : "로그아웃 상태"}
      </h1>
      <button
        onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
};

export default Login;
