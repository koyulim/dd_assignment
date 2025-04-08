import React from "react";
import { AuthProvider } from "./authProvider";
import Login from "./login";
import Profile from "./profile";

const GlobalState = () => {
  return (
    <AuthProvider>
      <div>
        <Login/>
        <Profile/>
      </div>
    </AuthProvider>
  );
};

export default GlobalState;
