import React from "react";
import styled from "styled-components";

import Divider from "../../common/Divider";

import dummy from "../../../assets/dummy_img.jpg";
import love_blank from "../../../assets/love_blank.png";
import share from "../../../assets/share.png";

import marker from "../../../assets/marker.png";
import parkingIco from "../../../assets/parking-ico.png";
import timeIco from "../../../assets/time-ico.png";

import wifiIco from "../../../assets/wifi-ico.png";
import RightArrowIco from "../../../assets/right-arrow-ico.png";
import * as IconLib from "../../../lib/icon";

const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    box-sizing: border-box;
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

  @media (max-width: 1024px) {
    display: block;

    padding: 20px;
    width: 100%;
    height: auto;

    box-sizing: border-box;
  }
`;

const PlaceImage = styled.div`
  width: 328px;
  height: 236px;

  padding: 20px;

  border-radius: 30px;
  background-image: url(${(props) => props.src});

  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    height: 257px;

    background-repeat: no-repeat;
    margin-bottom: 30px;
  }
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

  @media (max-width: 1024px) {
    font-size: 19px;
  }
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

const NotBoldStyledSpan = styled.strong`
  font-weight: 300;
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
    <>
      <PC>
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
                <StyledSpan>
                  체크인 <NotBoldStyledSpan>10:00</NotBoldStyledSpan>
                </StyledSpan>
              </VerticalCenterDiv>

              <HorizontalMargin margin="12px" />
              <StyledSpan>|</StyledSpan>
              <HorizontalMargin margin="12px" />

              <VerticalCenterDiv>
                <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
                <HorizontalMargin margin="12px" />
                <StyledSpan>
                  체크아웃 <NotBoldStyledSpan>10:00</NotBoldStyledSpan>
                </StyledSpan>
              </VerticalCenterDiv>
            </VerticalCenterDiv>
          </div>

          <HorizontalMargin margin="auto" />
          <Arrow>
            <ArrowImg src={RightArrowIco} />
          </Arrow>
          <HorizontalMargin margin="55px" />
        </Wrapper>
      </PC>
      <Mobile>
        <Wrapper>
          <PlaceImage src={dummy} />
          <Name>노원 리츠 호텔</Name>
          <VerticalMargin margin="14px" />
          <VerticalCenterDiv>
            <div>{IconLib.getImgIcon(marker, 24, 24)}</div>
            <HorizontalMargin margin="12px" />
            <StyledSpan>노원역 약 10분 거리</StyledSpan>
          </VerticalCenterDiv>
          <VerticalMargin margin="20px" />
          <Divider />
          <VerticalMargin margin="20px" />
          <div>
            <VerticalCenterDiv>
              <div>{IconLib.getImgIcon(parkingIco, 24, 24)}</div>
              <HorizontalMargin margin="12px" />
              <StyledSpan>주차 가능</StyledSpan>
            </VerticalCenterDiv>

            <VerticalMargin margin="20px" />

            <VerticalCenterDiv>
              <div>{IconLib.getImgIcon(wifiIco, 24, 24)}</div>
              <HorizontalMargin margin="12px" />
              <StyledSpan>와이파이</StyledSpan>
            </VerticalCenterDiv>

            <VerticalMargin margin="20px" />

            <VerticalCenterDiv>
              <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
              <HorizontalMargin margin="12px" />
              <StyledSpan>
                체크인 <NotBoldStyledSpan>10:00</NotBoldStyledSpan>
              </StyledSpan>
            </VerticalCenterDiv>

            <VerticalMargin margin="20px" />

            <VerticalCenterDiv>
              <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
              <HorizontalMargin margin="12px" />
              <StyledSpan>
                체크아웃 <NotBoldStyledSpan>10:00</NotBoldStyledSpan>
              </StyledSpan>
            </VerticalCenterDiv>
          </div>

          <VerticalMargin margin="20px" />
        </Wrapper>
      </Mobile>
    </>
  );
}
