import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import TestResult from '../components/main/TestResult';

import { useSpring, animated } from 'react-spring';
import Footer from '../components/common/Footer';

const TripInfoBackground = styled.div`
  width: 100vw;
  background-color: #fff;
  font-family: 'NanumSquare', sans-serif !important;
`;

function TripInfoPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <TripInfoBackground>
        <Header />
        <TestResult />
        <Footer />
      </TripInfoBackground>
    </>
  );
}

export default TripInfoPage;
