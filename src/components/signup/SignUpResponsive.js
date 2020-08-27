import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  width: 465px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 90%;
  }

  font-family: "NanumSquare", sans-serif !important;
`;

const SignUpResponsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default SignUpResponsive;
