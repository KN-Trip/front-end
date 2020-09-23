import React, { useEffect } from 'react';
import styled from 'styled-components';
import HotelItem from './HotelItem';

import { useState, useRef } from 'react';
import Slider from 'react-slick';
import dummy_img from '../../../assets/dummy_img.jpg';

import useTrip from '../../../hooks/useTrip';
import { useLocation } from 'react-router-dom';

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

const PC = styled.div`
  @media (min-width: 1025px) {
    display: block;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 1024px;
  margin: 188px auto;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 200px;
  }
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

  @media (max-width: 1024px) {
    line-height: 1;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  margin-right: 40px;
  font-family: 'Godo', sans-serif;
  font-size: 42px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -2.52px;
  text-align: left;
  color: #173147;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -1.08px;

    color: #173147;
  }
`;

const WidthSlider = styled(Slider)`
  width: 100%;
  outline: none;

  background-color: #fff;

  & :focus {
    outline: none;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  @media (max-width: 1024px) {
    box-sizing: border-box;
    padding-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
  }

  & :focus {
    outline: none;
  }
`;

export default function Closehotel({ contentId, areaCode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef();

  const tripinfo = useTrip();

  useEffect(() => {
    tripinfo.getStayPlaceRequest(areaCode, contentId);
  }, []); //

  const mobileSetting = {
    accessibility: false,
    focusOnSelect: false,
    centerPadding: '0px',

    dots: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },

    arrows: false,
  };

  return (
    tripinfo.stayplace_data && (
      <>
        <PC>
          <Wrapper>
            <SpaceBetweenFlexDiv>
              <FlexDiv>
                <Title>{`#${tripinfo.tripinfo_detail_data.common.area} 근처 숙소`}</Title>
                <Desc>검색하신 지역을 기반으로 하여 추천되는 숙소입니다.</Desc>
              </FlexDiv>
            </SpaceBetweenFlexDiv>

            <div>
              {tripinfo.stayplace_data.map((place, i) => (
                <>
                  <div className="center">
                    <CardWrapper>
                      <HotelItem place={place} />
                    </CardWrapper>
                  </div>
                </>
              ))}
            </div>
          </Wrapper>
        </PC>

        <Mobile>
          <Wrapper>
            <Title>{`#${tripinfo.tripinfo_detail_data.common.area} 근처 숙소`}</Title>
            <Desc>검색하신 지역을 기반으로 하여 추천되는 숙소입니다.</Desc>

            <div>
              <WidthSlider ref={slider} {...mobileSetting}>
                {tripinfo.stayplace_data.map((place, i) => (
                  <>
                    <div className="center">
                      <CardWrapper>
                        <HotelItem place={place} />
                      </CardWrapper>
                    </div>
                  </>
                ))}
              </WidthSlider>
            </div>
          </Wrapper>
        </Mobile>
      </>
    )
  );
}
