import React from "react";
import styled from "styled-components";
import background from "../../assets/background.png";

const BackgroundWrapper = styled.div`
  background-color: #fff;
  font-family: "NanumSquare", sans-serif !important;

  @media (min-width: 1025px) {
    width: 100vw;
    background-image: url(${(props) => props.src});
    background-repeat: repeat-y;
    overflow-x: hidden;
  }

  @media (max-width: 1024px) {
  }
`;

function Background({ children }) {
  return <BackgroundWrapper src={background}>{children}</BackgroundWrapper>;
}

export default Background;
