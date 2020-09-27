import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Responsive from '../common/Responsive';
import TestIndex from './TestIndex';
import Divider from '../common/Divider';
import TestFilter from './TestFilter';
import HashTagList from './HashTagList';
import useTravelTest from '../../hooks/useTravelTest';

import * as IconLib from '../../lib/icon';
import dropdownIco from '../../assets/dropdown-ico.png';

import { Link as ScrollLink } from 'react-scroll';
import { Element } from 'react-scroll';
import { English } from '../common/Font';
import usePostTest from '../../hooks/usePostTest';

const PC = styled.div`
  @media (min-width: 1025px) {
    display: block;
    width: 100%;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
    padding: 0 30px;

    box-sizing: border-box;
  }
`;

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

  font-family: 'Godo', sans-serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  line-height: 1.81;
  letter-spacing: -1.68px;
  color: #173147;

  @media (max-width: 1024px) {
    font-size: 20px;

    font-stretch: normal;
    font-style: normal;

    letter-spacing: -1.2px;
    text-align: center;
    color: #173147;
  }
`;

const TemplateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  width: 100%;

  margin-top: 70px;
  padding: 51px 67px;

  border-radius: 30px;
  box-shadow: 0 2px 50px 0 rgba(22, 27, 96, 0.1);

  background-color: #ffffff;

  @media (max-width: 1024px) {
    padding: 35px 40px;
  }
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

  font-family: 'Godo', sans-serif;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -1px;
  text-align: left;
  color: #173147;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

const Description = styled.h5`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;

  @media (max-width: 1024px) {
    line-height: 1.86;
    margin-bottom: 30px;
  }
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

  margin-top: 30px;
  margin-bottom: 30px;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #424242;

  @media (min-width: 1025px) {
    white-space: nowrap;
  }
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

const SelectStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 10px;
  padding: 14px 30px;

  width: 100%;
  height: 46px;
  border-radius: 10px;
  border: solid 1px #f85c5c;
  background-color: #ffffff;

  box-sizing: border-box;

  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #f85c5c;
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

function TravelTendancyTest() {
  const [indexOne, titleOne, descOne, onResetOne, checkedOne] = useTravelTest(
    1
  );
  const [indexTwo, titleTwo, descTwo, onResetTwo, checkedTwo] = useTravelTest(
    2
  );

  const { onPostTestRequest, login } = usePostTest();
  const history = useHistory();

  const showHashTagListIfExist = (checked, testNum) => {
    if (checked > 0) {
      return (
        <div style={{ width: '100%' }}>
          <Divider />
          <VerticalMargin margin="30px" />
          <HashTagList index={testNum} />
          <VerticalMargin margin="30px" />
          <Divider />
        </div>
      );
    } else return null;
  };

  return (
    <div>
      <PC>
        <Responsive>
          <Wrapper>
            <Element name="first-test">
              <Title>서로의 여행 성향을 테스트 해보세요!</Title>
            </Element>
            <TestIndex index={indexOne} />

            <TemplateBox>
              <English>
                <StepButton>{`Step 01`}</StepButton>
              </English>
              <QuestionH3>{titleOne}</QuestionH3>
              <Description>{descOne}</Description>
              <VerticalMargin margin="52px" />
              <Divider />
              <TestFilter index={indexOne} />

              <Divider />

              <HashTagAndInfoWrapper>
                <HashTagList index={indexOne} />
                <Info>* 최대 3개까지 선택 가능합니다.</Info>
              </HashTagAndInfoWrapper>
              <ButtonWrapper>
                <English>
                  <StyledButton onClick={onResetOne}>Reset</StyledButton>
                </English>
                <ScrollLink
                  activeClass="active"
                  to="second-test"
                  spy={true}
                  smooth={true}
                  duration={700}
                >
                  <English>
                    <ColorStyledButton>Next</ColorStyledButton>
                  </English>
                </ScrollLink>
              </ButtonWrapper>
            </TemplateBox>
          </Wrapper>

          <WrapperTwo>
            <Element name="second-test">
              <TestIndex index={indexTwo} />
            </Element>
            <TemplateBox>
              <English>
                <StepButton>{`Step 02`}</StepButton>
              </English>
              <QuestionH3>{titleTwo}</QuestionH3>
              <Description>{descTwo}</Description>
              <VerticalMargin margin="52px" />
              <Divider />
              <TestFilter index={indexTwo} />
              <Divider />
              <HashTagAndInfoWrapper>
                <HashTagList index={indexTwo} />
                <Info>* 최대 5개까지 선택 가능합니다.</Info>
              </HashTagAndInfoWrapper>
              <ButtonWrapper>
                <English>
                  <StyledButton onClick={onResetTwo}>Reset</StyledButton>
                </English>
                <English>
                  <ColorStyledButton
                    onClick={async () => {
                      await onPostTestRequest();
                    }}
                  >
                    Next
                  </ColorStyledButton>
                </English>
              </ButtonWrapper>
            </TemplateBox>
          </WrapperTwo>
        </Responsive>
      </PC>

      <Mobile>
        <Element name="mobile-first-test">
          <VerticalMargin margin="127px" />
        </Element>
        <Title>서로의 여행 성향을 테스트 해보세요!</Title>
        <TestIndex index={indexOne} />
        <TemplateBox>
          <English>
            <StepButton>{`Step 01`}</StepButton>
          </English>
          <QuestionH3>{titleOne}</QuestionH3>
          <Description>{descOne}</Description>

          <Divider />

          <SelectStatus>
            <div>{`${checkedOne}개 선택됨`}</div>
            <div>{IconLib.getImgIcon(dropdownIco, 24, 24)}</div>
          </SelectStatus>
          <TestFilter index={indexOne} />
          <Info>* 최대 3개까지 선택 가능합니다.</Info>
          <div style={{ width: '100%' }}>
            {showHashTagListIfExist(checkedOne, indexOne)}
          </div>
          <VerticalMargin margin="30px" />
          <ScrollLink
            activeClass="active"
            to="mobile-second-test"
            spy={true}
            smooth={true}
            duration={700}
          >
            <English>
              <ColorStyledButton>Next</ColorStyledButton>
            </English>
          </ScrollLink>
          <VerticalMargin margin="20px" />
          <English>
            <StyledButton onClick={onResetOne}>Reset</StyledButton>
          </English>
        </TemplateBox>
        <Element name="mobile-second-test">
          <VerticalMargin margin="90px" />
        </Element>
        <TestIndex index={indexTwo} />
        <TemplateBox>
          <English>
            <StepButton>{`Step 02`}</StepButton>
          </English>
          <QuestionH3>{titleTwo}</QuestionH3>
          <Description>{descTwo}</Description>

          <Divider />

          <SelectStatus>
            <div>{`${checkedTwo}개 선택됨`}</div>
            <div>{IconLib.getImgIcon(dropdownIco, 24, 24)}</div>
          </SelectStatus>
          <TestFilter index={indexTwo} />
          <Info>* 최대 5개까지 선택 가능합니다.</Info>
          <div style={{ width: '100%' }}>
            {showHashTagListIfExist(checkedTwo, indexTwo)}
          </div>
          <VerticalMargin margin="30px" />
          <English>
            <ColorStyledButton
              onClick={async () => {
                await onPostTestRequest();
                if (login) {
                  if (
                    window.confirm(
                      '검사를 완료했습니다.\n결과를 확인하시겠습니까?'
                    )
                  ) {
                    history.push('/tripinfo');
                  }
                }
              }}
            >
              Next
            </ColorStyledButton>
          </English>
          <VerticalMargin margin="20px" />
          <English>
            <StyledButton onClick={onResetTwo}>Reset</StyledButton>
          </English>
        </TemplateBox>
        <VerticalMargin margin="174px" />
      </Mobile>
    </div>
  );
}

export default TravelTendancyTest;
