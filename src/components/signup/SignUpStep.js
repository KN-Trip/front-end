import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 95px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;
  background-color: #fea2a2;

  border-radius: 100%;

  color: white;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CircleTwo = styled(Circle)`
  ${(props) =>
    props.index === 1 &&
    css`
      border: solid 1px #bdbdbd;

      background-color: #ffffff;
      color: #bdbdbd;
    `};
`;

const CircleThree = styled(Circle)`
  ${(props) =>
    (props.index === 1 || props.index === 2) &&
    css`
      border: solid 1px #bdbdbd;

      background-color: #ffffff;
      color: #bdbdbd;
    `};
`;

const Line = styled.div`
  width: 87px;
  height: 6px;

  background-color: #fea2a2;
`;

const LineTwo = styled(Line)`
  ${(props) =>
    props.index === 1 &&
    css`
      height: 1px;
      background-color: #bdbdbd;
    `};
`;

const LineThree = styled(Line)`
  ${(props) =>
    (props.index === 1 || props.index === 2) &&
    css`
      height: 1px;
      background-color: #bdbdbd;
    `};
`;
function SignUpStep({ index }) {
  return (
    <Wrapper>
      <Circle index={index}>1</Circle>

      <LineWrapper>
        <Line />
        <LineTwo index={index} />
      </LineWrapper>

      <CircleTwo index={index}>2</CircleTwo>

      <LineWrapper>
        <LineTwo index={index} />
        <LineThree index={index} />
      </LineWrapper>

      <CircleThree index={index}>3</CircleThree>
    </Wrapper>
  );
}

export default SignUpStep;
