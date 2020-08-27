import React from "react";
import styled from "styled-components";
import TestResultHashTagList from "./TestResultHashTagList";
import Responsive from "../common/Responsive";
import TestResultPlaceList from "./TestResultPlaceList";

const Wrapper = styled.div`
  margin-top: 188px;
`;

const ResultText = styled.div`
  margin-bottom: 70px;

  font-family: "Godo", sans-serif;
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

function TestResult() {
  return (
    <Wrapper>
      <Responsive>
        <ResultText>
          <TextOne>서로의 해시태그를 분석한 결과!</TextOne>
          <TextTwo>
            <StrongWord>총 105개</StrongWord>의 <StrongWord>장소</StrongWord>를
            <StrongWord> 발견했습니다!</StrongWord>
          </TextTwo>
        </ResultText>
        <TestResultHashTagList />
      </Responsive>
      <BlankDiv />
      <TestResultPlaceList />
    </Wrapper>
  );
}

export default TestResult;
