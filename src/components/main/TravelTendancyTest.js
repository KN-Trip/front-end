import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import TestIndex from "./TestIndex";
import Divider from "../common/Divider";
import TestFilter from "./TestFilter";
import HashTagList from "./HashTagList";
import useTravelTest from "../../hooks/useTravelTest";

import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 432px;
`;

const WrapperTwo = styled(Wrapper)`
  margin-top: 70px;
  margin-bottom: 143px;
`;

const Title = styled.h2`
  margin-bottom: 70px;

  font-family: "Godo", sans-serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  line-height: 1.81;
  letter-spacing: -1.68px;
  color: #173147;
`;

const TemplateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  width: 100%;
  height: 650px;

  margin-top: 70px;
  padding: 51px 67px;

  border-radius: 30px;
  box-shadow: 0 2px 50px 0 rgba(22, 27, 96, 0.1);

  background-color: #ffffff;
`;

const StepButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 106px;
  height: 32px;

  margin-bottom: 30px;

  border-radius: 26px;

  background-color: #febbbb;

  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.22;
  letter-spacing: -0.72px;
  color: #ffffff;
`;

const QuestionH3 = styled.h3`
  margin-bottom: 26px;

  font-family: "Godo", sans-serif;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -1px;
  text-align: left;
  color: #173147;
`;

const Description = styled.h5`
  padding-bottom: 52px;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;

const HashTagAndInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 25px;
`;

const Info = styled.h5`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.64px;
  text-align: left;
  color: #424242;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: 8px;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 170px;
  height: 48px;

  margin-right: 20px;
  border-radius: 26px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;

  font-weight: bold;
  line-height: 1.88;
  letter-spacing: -0.64px;

  color: #757575;

  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

const ColorStyledButton = styled(StyledButton)`
  background-color: #f85c5c;
  color: #ffffff;
  border: 0px;
`;

function TravelTendancyTest() {
  const [indexOne, titleOne, descOne, onResetOne] = useTravelTest(1);
  const [indexTwo, titleTwo, descTwo, onResetTwo] = useTravelTest(2);

  return (
    <Responsive>
      <Wrapper>
        <Element name="first-test">
          <Title>서로의 여행 성향을 테스트 해보세요!</Title>
        </Element>
        <TestIndex index={indexOne} />

        <TemplateBox>
          <StepButton>{`STEP 01`}</StepButton>
          <QuestionH3>{titleOne}</QuestionH3>
          <Description>{descOne}</Description>
          <Divider />
          <TestFilter index={indexOne} />
          <Divider />
          <HashTagAndInfoWrapper>
            <HashTagList index={indexOne} />
            <Info>* 최대 3개까지 선택 가능합니다.</Info>
          </HashTagAndInfoWrapper>
          <ButtonWrapper>
            <StyledButton onClick={onResetOne}>Reset</StyledButton>
            <ScrollLink
              activeClass="active"
              to="second-test"
              spy={true}
              smooth={true}
              duration={700}
            >
              <ColorStyledButton>Next</ColorStyledButton>
            </ScrollLink>
          </ButtonWrapper>
        </TemplateBox>
      </Wrapper>

      <WrapperTwo>
        <Element name="second-test">
          <TestIndex index={indexTwo} />
        </Element>
        <TemplateBox>
          <StepButton>{`STEP 02`}</StepButton>
          <QuestionH3>{titleTwo}</QuestionH3>
          <Description>{descTwo}</Description>
          <Divider />
          <TestFilter index={indexTwo} />
          <Divider />
          <HashTagAndInfoWrapper>
            <HashTagList index={indexTwo} />
            <Info>* 최대 5개까지 선택 가능합니다.</Info>
          </HashTagAndInfoWrapper>
          <ButtonWrapper>
            <StyledButton onClick={onResetTwo}>Reset</StyledButton>
            <ColorStyledButton
              onClick={() => {
                alert("아래로 이동");
              }}
            >
              Next
            </ColorStyledButton>
          </ButtonWrapper>
        </TemplateBox>
      </WrapperTwo>
    </Responsive>
  );
}

export default TravelTendancyTest;
