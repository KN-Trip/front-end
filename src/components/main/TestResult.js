import React from "react";
import styled from "styled-components";
import TestResultHashTagList from "./TestResultHashTagList";
import Responsive from "../common/Responsive";
import TestResultPlaceList from "./TestResultPlaceList";
import Divider from "../common/Divider";
import PlaceItem from "../common/PlaceItem";

const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
    padding: 0 30px;

    box-sizing: block;
  }
`;

const PC = styled.div`
  @media (min-width: 1025px) {
    display: block;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin-top: 188px;
`;

const ResultText = styled.div`
  margin-bottom: 70px;

  font-family: "Godo", sans-serif;

  @media (max-width: 1024px) {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 26px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: -1.56px;
    text-align: left;
    color: #173147;
  }
`;

const TextOne = styled.span`
  display: block;

  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: -1.28px;
  text-align: left;
  color: #173147;
`;
const TextTwo = styled.span`
  display: block;
  font-size: 42px;
  letter-spacing: -1.68px;
  color: #173147;
`;

const StrongWord = styled.strong`
  font-weight: bold;
  color: black;
`;

const BlankDiv = styled.div`
  width: 100vw;
  height: 70px;
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterItem = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;
function TestResult() {
  return (
    <>
      <PC>
        <Wrapper>
          <Responsive>
            <ResultText>
              <TextOne>서로의 해시태그를 분석한 결과!</TextOne>
              <TextTwo>
                <StrongWord>총 105개</StrongWord>의{" "}
                <StrongWord>장소</StrongWord>를
                <StrongWord> 발견했습니다!</StrongWord>
              </TextTwo>
            </ResultText>
            <TestResultHashTagList />
          </Responsive>
          <BlankDiv />
          <TestResultPlaceList />
        </Wrapper>
      </PC>

      <Mobile>
        <ResultText>
          해시태그를 분석한 결과!
          <br />총 100개 이상의 장소를
          <br />
          발견했습니다!
        </ResultText>
        <TestResultHashTagList />
        <VerticalMargin margin="50px" />
        <Divider />
        <VerticalMargin margin="30px" />
        <FilterWrapper>
          <div>총 100+</div>
          <FilterWrapper>
            <div>조회순</div>
            <FilterItem>|</FilterItem>
            <div>인기순</div>
            <FilterItem>|</FilterItem>
            <div>제목순</div>
          </FilterWrapper>
        </FilterWrapper>
        <VerticalMargin margin="30px" />

        <TestResultPlaceList />
        <VerticalMargin margin="53px" />
      </Mobile>
    </>
  );
}

export default TestResult;
