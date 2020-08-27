import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

function Divider() {
  return <DividerWrapper />;
}

export default Divider;
