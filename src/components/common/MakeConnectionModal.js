import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  z-index: 30;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.29);

  overflow-y: hidden;

  @media (max-width: 1024px) {
    padding: 30px 27px;
    box-sizing: border-box;
  }
`;

const PC = styled.div`
  @media (min-width: 1025px) {
    display: block;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Modal = styled.div`
  @media (min-width: 1025px) {
    padding: 30px;
    width: 1024px;
    height: 630px;
    border-radius: 30px;
    box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
    background-color: #ffffff;
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    height: 100%;

    border-radius: 30px;
    box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
    background-color: #ffffff;
    box-sizing: border-box;

    padding: 30px 15px;

    overflow-y: auto;
  }
`;

export default function MakeConnectionModal() {
  return <></>;
}
