import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  @media (min-width: 1025px) {
    width: 465px;
    margin: 0 auto;
  }
  font-family: "NanumSquare", sans-serif !important;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
`;

const SignUpResponsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default SignUpResponsive;
