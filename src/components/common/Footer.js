import React from 'react';
import styled from 'styled-components';
import footer from '../../assets/footer.png';
import mobileFooter from '../../assets/mobile-footer.png';

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

const FooterImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 520px;

  background-image: url(${(props) => props.src});

  background-repeat: none;

  font-family: 'NanumSquare', sans-serif !important;
`;

const FooterParagraph = styled.p`
  position: relative;
  top: 80px;
  display: block;
  font-family: 'NanumSquare', sans-serif !important;

  font-size: 14px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: normal;
  text-align: center;
  color: #424242;

  @media (max-width: 1024px) {
    top: 0;
    margin-bottom: 20px;

    font-size: 10px;
    font-weight: 500;
  }
`;

const English = styled.strong`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
`;
const FooterImg = styled.img`
  width: 100vw;
  height: 110px;
`;

export default function Footer() {
  return (
    <>
      <PC>
        <FooterImgWrapper src={footer}>
          <FooterParagraph>
            <English>COPYRIGHT 2020</English> 꽁냥트립
            <English> ALL RIGHTS RESERVED.</English>
            <br /> 본 사이트는 상업적 목적이 아닌 포트폴리오 사이트로
            제작되었습니다.
          </FooterParagraph>
        </FooterImgWrapper>
      </PC>

      <Mobile>
        <FooterParagraph>
          <English>COPYRIGHT 2020</English> 꽁냥트립
          <English> ALL RIGHTS RESERVED.</English>
          <br /> 본 사이트는 상업적 목적이 아닌 포트폴리오 사이트로
          제작되었습니다.
        </FooterParagraph>
        <FooterImg src={mobileFooter} />
      </Mobile>
    </>
  );
}
