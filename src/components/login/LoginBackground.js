import React from "react";
import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.png";

const BackgroundWrapper = styled.div`
  font-family: "NanumSquare", sans-serif !important;
`;

function LoginBackground({ children }) {
  return (
    <BackgroundWrapper src={loginBackground}>{children}</BackgroundWrapper>
  );
}

export default LoginBackground;
