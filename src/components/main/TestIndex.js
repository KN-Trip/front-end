import React from 'react';
import styled, { css } from 'styled-components';
import { English } from '../common/Font';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  background-color: #fea2a2;

  border-radius: 100%;

  font-weight: 700;
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

const Line = styled.div`
  width: 185px;
  height: 6px;

  background-color: #fea2a2;

  @media (max-width: 1024px) {
    width: 90px;
  }
`;

const LineTwo = styled(Line)`
  ${(props) =>
    props.index === 1 &&
    css`
      height: 1px;
      background-color: #bdbdbd;
    `};
`;

function TestIndex({ index }) {
  return (
    <Wrapper>
      <Circle index={index}>
        <English>1</English>
      </Circle>
      <LineWrapper>
        <Line />
        <LineTwo index={index} />
      </LineWrapper>
      <CircleTwo index={index}>
        <English>2</English>
      </CircleTwo>
    </Wrapper>
  );
}

export default TestIndex;
