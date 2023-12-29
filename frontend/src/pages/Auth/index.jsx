import React, { useState } from "react";

import Login from "../../components/Login";
import Signup from "../../components/Signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const loginCheckHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      {isLogin ? (
        <Login onChangeLogin={loginCheckHandler} />
      ) : (
        <Signup onChangeLogin={loginCheckHandler} />
      )}
    </>
  );
};

export default Auth;
