import React from "react";
import styled from "styled-components";

import dummy from "../../../assets/dummy_img.jpg";
import love_blank from "../../../assets/love_blank.png";
import share from "../../../assets/share.png";

import marker from "../../../assets/marker.png";
import parkingIco from "../../../assets/parking-ico.png";
import timeIco from "../../../assets/time-ico.png";

import wifiIco from "../../../assets/wifi-ico.png";
import RightArrowIco from "../../../assets/right-arrow-ico.png";
import * as IconLib from "../../../lib/icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;

  width: 1024px;
  height: 276px;
  border-radius: 30px;
  box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
  background-color: #ffffff;

  box-sizing: border-box;
`;

const PlaceImage = styled.div`
  width: 328px;
  height: 236px;

  padding: 20px;

  border-radius: 30px;
  background-image: url(${(props) => props.src});
  background-size: 328px 236px;

  box-sizing: border-box;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 68px;
  margin-left: auto;
`;

const ImageIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`;

const ClickImageIcon = styled(ImageIcon)`
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.96px;

  color: #000000;
`;

const StyledSpan = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;
const FlexDiv = styled.div`
  display: flex;
`;

const VerticalCenterDiv = styled(FlexDiv)`
  align-items: center;
`;

const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  border: 1px solid #757575;
  border-radius: 100%;

  cursor: pointer;
  user-select: none;
`;

const HorizontalMargin = styled.div`
  margin-left: ${(props) => props.margin};
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

export default function Hotelitem() {
  return (
    <Wrapper>
      <PlaceImage src={dummy}>
        <ImgWrapper>
          <ClickImageIcon src={love_blank} alt="loveIcon" />
          <ClickImageIcon src={share} alt="shareIcon" />
        </ImgWrapper>
      </PlaceImage>

      <HorizontalMargin margin="70px" />

      <div>
        <Name>노원 리츠 호텔</Name>
        <VerticalMargin margin="12px" />
        <VerticalCenterDiv>
          <div>{IconLib.getImgIcon(marker, 24, 24)}</div>
          <HorizontalMargin margin="12px" />
          <StyledSpan>노원역 약 10분 거리</StyledSpan>
        </VerticalCenterDiv>

        <VerticalMargin margin="39px" />

        <VerticalCenterDiv>
          <VerticalCenterDiv>
            <div>{IconLib.getImgIcon(parkingIco, 24, 24)}</div>
            <HorizontalMargin margin="12px" />
            <StyledSpan>주차 가능</StyledSpan>
          </VerticalCenterDiv>

          <HorizontalMargin margin="12px" />
          <StyledSpan>|</StyledSpan>
          <HorizontalMargin margin="12px" />

          <VerticalCenterDiv>
            <div>{IconLib.getImgIcon(wifiIco, 24, 24)}</div>
            <HorizontalMargin margin="12px" />
            <StyledSpan>와이파이</StyledSpan>
          </VerticalCenterDiv>
        </VerticalCenterDiv>

        <VerticalMargin margin="12px" />

        <VerticalCenterDiv>
          <VerticalCenterDiv>
            <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
            <HorizontalMargin margin="12px" />
            <StyledSpan>체크인</StyledSpan>
          </VerticalCenterDiv>

          <HorizontalMargin margin="12px" />
          <StyledSpan>|</StyledSpan>
          <HorizontalMargin margin="12px" />

          <VerticalCenterDiv>
            <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
            <HorizontalMargin margin="12px" />
            <StyledSpan>체크아웃</StyledSpan>
          </VerticalCenterDiv>
        </VerticalCenterDiv>
      </div>

      <HorizontalMargin margin="auto" />
      <Arrow>
        <ArrowImg src={RightArrowIco} />
      </Arrow>
      <HorizontalMargin margin="55px" />
    </Wrapper>
  );
}
