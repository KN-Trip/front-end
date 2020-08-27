import React from "react";
import Background from "../components/main/Background";
import Header from "../components/Header";
import Banner from "../components/main/Banner";
import TravelTendancyTest from "../components/main/TravelTendancyTest";

import { useSpring, animated } from "react-spring";
import Footer from "../components/common/Footer";

function MainPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <Background>
        <Header />
        <Banner />
        <TravelTendancyTest />
        <Footer />
      </Background>
    </animated.div>
  );
}

export default MainPage;
