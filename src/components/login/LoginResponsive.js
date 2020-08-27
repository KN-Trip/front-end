import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  width: 360px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const LoginResponsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default LoginResponsive;
