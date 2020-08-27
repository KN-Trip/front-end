import React from "react";
import Background from "../components/main/Background";
import Header from "../components/Header";
import ReadyToService from "../components/shortpath/temp/ReadyToService";
import SignUpResponsive from "../components/signup/SignUpResponsive";

import { useSpring, animated } from "react-spring";

function ShortPathPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <animated.div style={props}>
        <Header />
        <SignUpResponsive>
          <ReadyToService />
        </SignUpResponsive>
      </animated.div>
    </>
  );
}

export default ShortPathPage;
