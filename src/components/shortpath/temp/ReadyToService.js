import React from 'react';
import styled from 'styled-components';

import warning from '../../../assets/warning.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: block;

  src: ${(props) => props.src};

  width: 130px;
  height: 130px;

  margin-top: 182px;

  @media (max-width: 1024px) {
    width: 85px;
    height: 85px;
  }
`;

const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 69px;

  font-family: 'Godo', sans-serif;
  font-size: 42px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -1.68px;
  text-align: center;
  color: #173147;

  @media (max-width: 1024px) {
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: -1.56px;
    text-align: left;
    color: #173147;
  }
`;

const Desc = styled.h3`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: -0.64px;
  text-align: center;
  color: #757575;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

const PC = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    display: block;
  }
`;

const Mobile = styled.div`
  @media (max-width: 1024px) {
    display: block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

function ReadyToService() {
  return (
    <Wrapper>
      <Img src={warning} alt="warning" />
      <Title>서비스 준비중입니다.</Title>

      <PC>
        <Desc>
          보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.
          <br />
          빠른 시일내에 준비하여 찾아뵙겠습니다.
        </Desc>
      </PC>

      <Mobile>
        <Desc>
          보다 나은 서비스 제공을 위하여 페이지 <br />
          준비중에 있습니다. 빠른 시일내에 <br />
          준비하여 찾아뵙겠습니다.
        </Desc>
      </Mobile>
    </Wrapper>
  );
}

export default ReadyToService;
