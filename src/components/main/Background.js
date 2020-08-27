import React from "react";
import styled from "styled-components";
import background from "../../assets/background.png";

const BackgroundWrapper = styled.div`
  width: 100vw;

  background-image: url(${(props) => props.src});
  background-color: #fff;

  background-repeat: repeat-y;

  font-family: "NanumSquare", sans-serif !important;
`;

function Background({ children }) {
  return <BackgroundWrapper src={background}>{children}</BackgroundWrapper>;
}

export default Background;
