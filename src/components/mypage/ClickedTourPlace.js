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

  @media (max-width: 104px) {
    width: 100%;
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

const LessThanThreeCardWrapper = styled(CardWrapper)`
  margin: 0 10px;
`;

export default function ClickedTourPlace({ places }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef();
  const mobileSlider = useRef();

  const settings = {
    accessibility: false,
    focusOnSelect: false,
    centerPadding: '50px',

    dots: false,

    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },

    arrows: false,
  };

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
              <Title>최근 조회한 여행지</Title>
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
        <Title>최근 조회한 여행지</Title>
        {places && (
          <div>
            <WidthSlider ref={mobileSlider} {...mobileSettings}>
              {places &&
                places.map((item, idx) => (
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
          </div>
        )}
      </Mobile>
    </>
  );
}
