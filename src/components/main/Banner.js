import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";

import { ButtonTemplate } from "../common/Button";

import mainimg from "../../assets/main-picture.png";

import { Link as ScrollLink } from "react-scroll";

const BannerWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 183px;
`;

const BannerH1 = styled.h1`
  margin-bottom: 50px;

  font-size: 52px;

  font-family: "Godo", sans-serif;
  font-size: 52px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;

  letter-spacing: -3.12px;
  line-height: 1.46;

  color: #173147;
`;

const BannerH3 = styled.h3`
  margin-bottom: 70px;

  font-size: 16px;
  font-weight: 300;
  line-height: 1.88;
  letter-spacing: -0.64px;
  text-align: left;

  color: #424242;
`;

const TestButton = styled(ButtonTemplate)`
  background-color: #f85c5c !important;

  font-weight: bold;
  color: #ffffff;

  cursor: pointer;
  user-select: none;
`;

const MainImg = styled.img`
  position: absolute;
  left: 300px;
  display: block;
  z-index: -1;

  width: 918px;
  height: 630px;
  object-fit: contain;

  src: ${(props) => props.src};
`;

const BannerTextImgWrapper = styled.div`
  display: flex;
`;
function Banner() {
  return (
    <Responsive>
      <BannerWrapper>
        <BannerTextImgWrapper>
          <div>
            <BannerH1>
              사랑하는 연인과
              <br />
              여행을 가고 싶은데…
              <br />
              어디로 떠날지 모르겠어요?
            </BannerH1>
            <BannerH3>
              꽁냥트립이 여러분의 여행지 선택을 도와드립니다.
              <br />
              간단한 테스트를 통해 여러분의 여행스타일을 분석해서
              <br /> 저희가 준비한 최적의 여행지를 알려드릴게요!
              <br /> 이제 꽁냥 트립과 최고의 여행을 준비해 볼까요?
            </BannerH3>
          </div>
          <MainImg src={mainimg} />
        </BannerTextImgWrapper>

        <ScrollLink
          activeClass="active"
          to="first-test"
          spy={true}
          smooth={true}
          duration={700}
        >
          <TestButton>성향 테스트 하기</TestButton>
        </ScrollLink>
      </BannerWrapper>
    </Responsive>
  );
}

export default Banner;
