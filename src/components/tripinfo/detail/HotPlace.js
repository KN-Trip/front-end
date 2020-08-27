import React, { useState, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import dummy_img from "../../../assets/dummy_img.jpg";

import LeftArrowIco from "../../../assets/left-arrow-ico.png";
import RightArrowIco from "../../../assets/right-arrow-ico.png";

import PlaceItem from "../../common/PlaceItem";

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

  & :focus {
    outline: none;
  }
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
    if (props.direction === "left") {
      if (props.num === 0) {
        return "1px solid #bdbdbd";
      }
    }
    if (props.direction === "right") {
      if (props.num === 6) {
        return "1px solid #bdbdbd";
      }
    }

    return "1px solid #757575";
  }};

  border-radius: 100%;
  background-color: #ffffff;

  cursor: pointer;
  user-select: none;
`;
const fakeJson = [
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
  {
    img: dummy_img,
    name: "서울 시립 북서울 미술관",
    address: "서울시 노원구",
  },
];

const SelectedDot = styled.div`
  width: 341px;
  height: 5px;

  background-color: #f85c5c;
`;

const Dot = styled.div`
  width: 341px;
  height: 1px;

  background-color: #bdbdbd;
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Dots({ slide, setSlide }) {
  const lengthOfJson = [0, 1, 2];

  return (
    <DotContainer>
      {lengthOfJson.map((v, idx) => {
        return v * 3 === slide ? (
          <SelectedDot
            onClick={() => {
              setSlide(idx);
            }}
          />
        ) : (
          <Dot
            onClick={() => {
              setSlide(idx);
            }}
          />
        );
      })}
    </DotContainer>
  );
}

export default function HotPlace() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef();

  const settings = {
    accessibility: false,
    focusOnSelect: false,
    centerPadding: "50px",

    dots: false,

    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },

    arrows: false,
  };

  return (
    <Wrapper>
      <SpaceBetweenFlexDiv>
        <FlexDiv>
          <Title>#노원구 핫한 여행지</Title>
          <Desc>다른 커플들은 이곳을 많이 다녀갔어요!</Desc>
        </FlexDiv>

        <FlexDiv>
          <Arrow
            onClick={() => {
              if (currentSlide === 0) {
                return;
              }

              slider.current.slickGoTo(currentSlide - 3);
              setCurrentSlide(currentSlide - 3);
            }}
            num={currentSlide}
            direction={"left"}
          >
            <ArrowImg src={LeftArrowIco} />
          </Arrow>

          <HorizontalMargin margin="20px" />

          <Arrow
            onClick={() => {
              if (currentSlide === 6) {
                return;
              }

              slider.current.slickGoTo(currentSlide + 3);
              setCurrentSlide(currentSlide + 3);
            }}
            num={currentSlide}
            direction={"right"}
          >
            <ArrowImg src={RightArrowIco} />
          </Arrow>
        </FlexDiv>
      </SpaceBetweenFlexDiv>
      <div>
        <WidthSlider ref={slider} {...settings}>
          {fakeJson.map((item, idx) => (
            <div className="center">
              <CardWrapper>
                <PlaceItem
                  id={idx}
                  img={item.img}
                  name={item.name}
                  address={item.address}
                />
              </CardWrapper>
            </div>
          ))}
        </WidthSlider>
      </div>

      <div>
        <Dots slide={currentSlide} setSlide={setCurrentSlide} />
      </div>
    </Wrapper>
  );
}
