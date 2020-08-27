import React from "react";
import styled from "styled-components";

const Img = styled.img`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const getImgIcon = (src, width, height) => {
  return <Img src={src} width={width} height={height} />;
};
