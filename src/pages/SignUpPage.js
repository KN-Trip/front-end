import React from "react";
import Header from "../components/Header";
import SignUpFormat from "../components/signup/SignUpFormat";
import SignUpResponsive from "../components/signup/SignUpResponsive";

import { useSpring, animated } from "react-spring";

function SignUpPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div>
      <animated.div style={props}>
        <Header />
        <SignUpResponsive>
          <SignUpFormat />
        </SignUpResponsive>
      </animated.div>
    </div>
  );
}

export default SignUpPage;
