import React, { useState } from 'react';
import Background from '../components/main/Background';
import Header from '../components/Header';
import Banner from '../components/main/Banner';
import TravelTendancyTest from '../components/main/TravelTendancyTest';

import { useSpring, animated } from 'react-spring';
import Footer from '../components/common/Footer';

import useCoupleEvent from '../hooks/useCoupleEvent';
import { useEffect } from 'react';
import ReceiveConnectionModal from '../components/common/ReceiveConnectionModal';
function MainPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const {
    getCouple_data,
    getCouple_loading,
    getCouple,
    getCouple_error,
    getCoupleRequest,

    processCouple_data,
    processCouple_loading,
    processCouple,
    processCouple_error,
    postCoupleProcessRequest,
  } = useCoupleEvent();

  useEffect(() => {
    getCoupleRequest();
  }, []);

  const [isOn, setIsOn] = useState(true);

  return (
    <animated.div style={props}>
      <Background>
        <Header />
        <Banner />
        <TravelTendancyTest />
        <Footer />
      </Background>
      {getCouple && getCouple_data.message === 'connect' && isOn && (
        <ReceiveConnectionModal
          connectionData={getCouple_data}
          processCouple={postCoupleProcessRequest}
          close={() => {
            setIsOn(!isOn);
          }}
        />
      )}
    </animated.div>
  );
}

export default MainPage;
