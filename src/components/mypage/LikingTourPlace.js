import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import dummy_img from '../../assets/dummy_img.jpg';

import LeftArrowIco from '../../assets/left-arrow-ico.png';
import RightArrowIco from '../../assets/right-arrow-ico.png';

import PlaceItem from '../common/PlaceItem';

const PC = styled.div`
  @media (min-width: 1025px) {
    display: block;
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
  }
`;

const HorizontalMargin = styled.div`
  margin-left: ${(props) => props.margin};
`;

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

const Title = styled.div`
  margin-right: 40px;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.3;
  letter-spacing: -0.8px;
  text-align: left;
  color: #000000;

  @media (max-width: 1024px) {
    margin: 71px 0 30px 0;
    line-height: 1;
  }
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

  margin-bottom: 90px;

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

const LessThanThreeCardWrapper = styled(CardWrapper)`
  margin: 0 10px;
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
  border: ${(props) => {
    if (props.direction === 'left') {
      if (props.num === 0) {
        return '1px solid #bdbdbd';
      }
    }
    if (props.direction === 'right') {
      if (props.num === 6) {
        return '1px solid #bdbdbd';
      }
    }

    return '1px solid #757575';
  }};

  border-radius: 100%;
  background-color: #ffffff;

  cursor: pointer;
  user-select: none;
`;

const LessThanThreeContainer = styled.div`
  width: 100%;
  overflow-x: auto;

  padding-bottom: 90px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    height: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f85c5c;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    background-clip: content-box;

    background-color: #bdbdbd;
  }
`;

export default function LikingTourPlace({ places }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mobileSlider = useRef();

  const mobileSettings = {
    accessibility: false,
    focusOnSelect: false,
    centerPadding: '50px',

    dots: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },

    arrows: false,
  };

  return (
    <>
      <PC>
        <Wrapper>
          <SpaceBetweenFlexDiv>
            <FlexDiv>
              <HorizontalMargin margin="75px" />
              <Title>내가 찜한 여행지</Title>
            </FlexDiv>
          </SpaceBetweenFlexDiv>

          {places && (
            <LessThanThreeContainer>
              <FlexDiv>
                {places.map((item, idx) => (
                  <div className="center">
                    <LessThanThreeCardWrapper>
                      <PlaceItem
                        id={item.contentID}
                        img={item.image}
                        name={item.title}
                        address={item.address}
                      />
                    </LessThanThreeCardWrapper>
                  </div>
                ))}
              </FlexDiv>
            </LessThanThreeContainer>
          )}
        </Wrapper>
      </PC>

      <Mobile>
        <Title>내가 찜한 여행지</Title>
        <div>
          {places && (
            <WidthSlider ref={mobileSlider} {...mobileSettings}>
              {places.map((item, idx) => (
                <div className="center">
                  <CardWrapper>
                    <PlaceItem
                      id={item.contentID}
                      img={item.image}
                      name={item.title}
                      address={item.address}
                    />
                  </CardWrapper>
                </div>
              ))}
            </WidthSlider>
          )}
        </div>
      </Mobile>
    </>
  );
}
