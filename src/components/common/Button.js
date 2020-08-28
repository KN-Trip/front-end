import React from "react";
import styled from "styled-components";

export const ButtonTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 48px;
  border-radius: 24px;

  font-size: 16px;
  letter-spacing: -0.64px;
`;

function Button({ children, ...rest }) {
  return <ButtonTemplate>{children}</ButtonTemplate>;
}

export default Button;
