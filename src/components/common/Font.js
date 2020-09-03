import React from "react";
import styled from "styled-components";

export const English = styled.div`
  font-family: "Montserrat", sans-serif;
`;

export default function EnglishFont({ children }) {
  return <English>{children}</English>;
}
