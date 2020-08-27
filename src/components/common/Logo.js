import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo.png";

const LogoWrapper = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

function Logo({ width, height }) {
  return (
    <LogoWrapper width={width} height={height}>
      <LogoImg src={logo} alt="logo-img" />
    </LogoWrapper>
  );
}

export default Logo;
