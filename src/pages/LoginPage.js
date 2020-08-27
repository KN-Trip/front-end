import React from "react";
import LoginBackground from "../components/login/LoginBackground";
import Header from "../components/Header";
import LoginForm from "../components/login/LoginForm";

import { useSpring, animated } from "react-spring";

function LoginPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <LoginBackground>
        <Header />
        <LoginForm />
      </LoginBackground>
    </animated.div>
  );
}

export default LoginPage;
