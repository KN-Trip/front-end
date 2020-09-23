import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PlaceItem from '../common/PlaceItem';

import dummy_img from '../../assets/dummy_img.jpg';

import '../../css/carousel.css';
import { Link } from 'react-router-dom';

const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PC = styled.div`
  @media (min-width: 1025px) {
    display: flex;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const WidthSlider = styled(Slider)`
  width: 100%;
  outline: none;

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

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

// Non-Selected Dot
const nonSelectedDot = {
  width: '12px',
  height: '12px',
  color: 'red',
  border: '0px',
  borderRadius: '100%',
  backgroundColor: '#bdbdbd',
};

// Selected Dot
const selectedDot = {
  width: '12px',
  height: '12px',
  color: 'red',
  border: '0px',
  borderRadius: '100%',
  backgroundColor: '#f85c5c',
};

function MultipleItems({ places }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    accessibility: false,
    focusOnSelect: false,
    centerPadding: '50px',

    dots: true,

    slidesToShow: (function () {
      if (window.innerWidth > 1700) {
        return 5;
      }

      if (window.innerWidth > 1333) {
        return 4;
      }
      return 3;
    })(),
    slidesToScroll: (function () {
      if (window.innerWidth > 1700) {
        return 5;
      }

      if (window.innerWidth > 1333) {
        return 4;
      }
      return 3;
    })(),

    beforeChange: (prev, next) => {
      console.log(next);
      setCurrentSlide(next);
    },

    arrows: false,

    customPaging: (i) => {
      return 5 * i === currentSlide ? (
        <div style={selectedDot} />
      ) : (
        <div style={nonSelectedDot} />
      );
    },
  };

  return (
    <>
      <PC>
        <WidthSlider {...settings}>
          {places.map((item, idx) => (
            <div className="center">
              <CardWrapper>
                <PlaceItem
                  id={item.contentID}
                  img={item.image}
                  name={item.title}
                  address={item.address}
                  type={item.contentTypeID}
                />
              </CardWrapper>
            </div>
          ))}
        </WidthSlider>
      </PC>
      <Mobile>
        {places.map((item, idx) => (
          <>
            <PlaceItem
              id={item.contentID}
              img={item.image}
              name={item.title}
              address={item.address}
              type={item.contentTypeID}
            />
            <VerticalMargin margin="30px" />
          </>
        ))}
      </Mobile>
    </>
  );
}

function TestResultPlaceList({ places }) {
  return (
    <>
      <MultipleItems places={places} />
    </>
  );
}

export default TestResultPlaceList;
