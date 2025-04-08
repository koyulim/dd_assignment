import React from "react";
import { useAuth } from "./authProvider";

const Profile = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <h2>사용자 프로필: 홍길동</h2>
      ) : (
        <h2>
            로그인 후 프로필을 확인하세요.
        </h2>
      )}
    </div>
  );
};

export default Profile;
