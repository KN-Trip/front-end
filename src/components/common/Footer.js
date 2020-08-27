import React from "react";
import styled from "styled-components";
import footer from "../../assets/footer.png";

const FooterImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 520px;

  background-image: url(${(props) => props.src});

  background-repeat: none;

  font-family: "NanumSquare", sans-serif !important;
`;

const FooterParagraph = styled.p`
  position: relative;
  top: 80px;
  display: block;

  font-size: 14px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: normal;
  text-align: center;
  color: #424242;
`;

export default function Footer() {
  return (
    <>
      <FooterImgWrapper src={footer}>
        <FooterParagraph>
          COPYRIGHT 2020 꽁냥트립 ALL RIGHTS RESERVED.
          <br /> 본 사이트는 상업적 목적이 아닌 포트폴리오 사이트로
          제작되었습니다.
        </FooterParagraph>
      </FooterImgWrapper>
    </>
  );
}
