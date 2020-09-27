import React from 'react';
import styled from 'styled-components';

import marker from '../../assets/marker.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 328px;
  height: 430px;

  padding: 20px;

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
  width: 288px;
  height: 257px;

  padding: 20px;

  border-radius: 30px 30px 0 0;
  background-image: url(${(props) => props.src});
  background-position-y: center;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    min-width: 100%;
    width: 100%;
    height: 257px;
  }
`;

const ImageIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`;

const PlaceName = styled.span`
  display: block;

  font-size: 24px;
  font-weight: 900;

  margin-top: 49px;
  margin-bottom: 10px;

  letter-spacing: -0.96px;
  text-align: left;
  color: #000000;

  text-decoration: none !important;

  @media (max-width: 1024px) {
    line-height: 1.5;
    font-size: 19px;
    margin-top: 30px;
  }
`;

const PlaceAddress = styled.span`
  margin-left: 6px;

  font-size: 16px;
  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;

const PlaceAddressWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function PlaceItem({ img, name, address, id, type }) {
  return (
    <Wrapper>
      <OneMoreWrapper>
        <PlaceImage src={img}></PlaceImage>

        <PlaceName>
          <StyledLink
            to={`/tripinfodetail?id=${id}&type=${type}`}
            className="linkTag"
          >
            {name}
          </StyledLink>
        </PlaceName>

        <PlaceAddressWrapper>
          <ImageIcon src={marker} alt="marker" />
          <PlaceAddress>{address}</PlaceAddress>
        </PlaceAddressWrapper>
      </OneMoreWrapper>
    </Wrapper>
  );
}

export default PlaceItem;
