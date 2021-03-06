import React from 'react';
import styled from 'styled-components';

import Divider from '../../common/Divider';

import marker from '../../../assets/marker.png';
import parkingIco from '../../../assets/parking-ico.png';
import timeIco from '../../../assets/time-ico.png';

import wifiIco from '../../../assets/wifi-ico.png';
import RightArrowIco from '../../../assets/right-arrow-ico.png';
import * as IconLib from '../../../lib/icon';

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
    width: 100%;
    height: auto;
  }
`;

const OneMoreWrapper = styled.div`
  width: 100%;
  height: 100%;
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

    background-size: 100% 257px;
    margin-bottom: 30px;
  }
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

export default function Hotelitem({ place }) {
  return (
    <>
      <PC>
        <Wrapper>
          <PlaceImage src={place.image}></PlaceImage>

          <HorizontalMargin margin="70px" />

          <div>
            <Name>{place.title}</Name>
            <VerticalMargin margin="12px" />
            <VerticalCenterDiv>
              <div>{IconLib.getImgIcon(marker, 24, 24)}</div>
              <HorizontalMargin margin="12px" />
              <StyledSpan>{place.address}</StyledSpan>
            </VerticalCenterDiv>

            <VerticalMargin margin="39px" />

            <VerticalCenterDiv>
              <VerticalCenterDiv>
                <div>{IconLib.getImgIcon(parkingIco, 24, 24)}</div>
                <HorizontalMargin margin="12px" />
                <StyledSpan>{`주차 ${
                  place.parkAvailable ? '' : '불'
                }가능`}</StyledSpan>
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
                  {'체크인 '}
                  <NotBoldStyledSpan>{place.checkInTime}</NotBoldStyledSpan>
                </StyledSpan>
              </VerticalCenterDiv>

              <HorizontalMargin margin="12px" />
              <StyledSpan>|</StyledSpan>
              <HorizontalMargin margin="12px" />

              <VerticalCenterDiv>
                <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
                <HorizontalMargin margin="12px" />
                <StyledSpan>
                  {'체크아웃 '}
                  <NotBoldStyledSpan>{place.checkOutTime}</NotBoldStyledSpan>
                </StyledSpan>
              </VerticalCenterDiv>
            </VerticalCenterDiv>
          </div>

          <HorizontalMargin margin="auto" />
          <Arrow
            onClick={() => {
              window.open(
                `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${place.title}`,
                '_blank'
              );
            }}
          >
            <ArrowImg src={RightArrowIco} />
          </Arrow>
          <HorizontalMargin margin="55px" />
        </Wrapper>
      </PC>
      <Mobile>
        <Wrapper
          onClick={() => {
            window.open(
              `https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${place.title}`,
              '_blank'
            );
          }}
        >
          <OneMoreWrapper>
            <PlaceImage src={place.image} />
            <Name>{place.title}</Name>
            <VerticalMargin margin="14px" />
            <VerticalCenterDiv>
              <div>{IconLib.getImgIcon(marker, 24, 24)}</div>
              <HorizontalMargin margin="12px" />
              <StyledSpan>{place.address}</StyledSpan>
            </VerticalCenterDiv>
            <VerticalMargin margin="20px" />
            <Divider />
            <VerticalMargin margin="20px" />
            <div>
              <VerticalCenterDiv>
                <div>{IconLib.getImgIcon(parkingIco, 24, 24)}</div>
                <HorizontalMargin margin="12px" />
                <StyledSpan>{`주차 ${
                  place.parkAvailable ? '' : '불'
                }가능`}</StyledSpan>
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
                  {'체크인 '}
                  <NotBoldStyledSpan>{place.checkInTime}</NotBoldStyledSpan>
                </StyledSpan>
              </VerticalCenterDiv>

              <VerticalMargin margin="20px" />

              <VerticalCenterDiv>
                <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
                <HorizontalMargin margin="12px" />
                <StyledSpan>
                  {'체크아웃 '}
                  <NotBoldStyledSpan>{place.checkOutTime}</NotBoldStyledSpan>
                </StyledSpan>
              </VerticalCenterDiv>
            </div>

            <VerticalMargin margin="20px" />
          </OneMoreWrapper>
        </Wrapper>
      </Mobile>
    </>
  );
}
