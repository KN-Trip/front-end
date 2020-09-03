import React from "react";
import styled from "styled-components";

import love_blank from "../../assets/love_blank.png";
import share from "../../assets/share.png";
import marker from "../../assets/marker.png";
import { Link } from "react-router-dom";

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

const PlaceImage = styled.div`
  width: 288px;
  height: 257px;

  padding: 20px;

  border-radius: 30px 30px 0 0;
  background-image: url(${(props) => props.src});

  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    background-repeat: no-repeat;
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

const PlaceName = styled.span`
  display: block;

  font-size: 24px;
  font-weight: bold;

  margin-top: 49px;
  margin-bottom: 10px;

  letter-spacing: -0.96px;
  text-align: left;
  color: #000000;

  text-decoration: none !important;
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

function PlaceItem({ img, name, address, id }) {
  return (
    <Wrapper>
      <PlaceImage src={img}>
        <ImgWrapper>
          <ClickImageIcon src={love_blank} alt="loveIcon" />
          <ClickImageIcon src={share} alt="shareIcon" />
        </ImgWrapper>
      </PlaceImage>

      <PlaceName>
        <StyledLink to={`/tripinfo/${id}`} className="linkTag">
          {name}
        </StyledLink>
      </PlaceName>

      <PlaceAddressWrapper>
        <ImageIcon src={marker} alt="marker" />
        <PlaceAddress>{address}</PlaceAddress>
      </PlaceAddressWrapper>
    </Wrapper>
  );
}

export default PlaceItem;
