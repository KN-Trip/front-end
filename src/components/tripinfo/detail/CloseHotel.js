import React from "react";
import styled from "styled-components";
import HotelItem from "./HotelItem";

const Wrapper = styled.div`
  width: 1024px;
  margin: 188px auto;

  box-sizing: border-box;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SpaceBetweenFlexDiv = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 70px;
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.13;
  letter-spacing: -0.64px;
  text-align: left;
  color: #424242;
`;

const Title = styled.div`
  margin-right: 40px;
  font-family: "Godo", sans-serif;
  font-size: 42px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -2.52px;
  text-align: left;
  color: #173147;
`;

export default function Closehotel() {
  return (
    <Wrapper>
      <SpaceBetweenFlexDiv>
        <FlexDiv>
          <Title>#노원구 근처 숙소</Title>
          <Desc>검색하신 지역을 기반으로 하여 추천되는 숙소입니다.</Desc>
        </FlexDiv>
      </SpaceBetweenFlexDiv>

      <div>
        <HotelItem />
        <HotelItem />
        <HotelItem />
      </div>
    </Wrapper>
  );
}
