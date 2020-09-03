import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/common/Footer";
import MyPageNav from "../components/mypage/MyPageNav";
import MyPageContent from "../components/mypage/MyPageContent";
import ShowRedundantID from "../components/common/ShowRedundantID";
import ReceiveConnectionModal from "../components/common/ReceiveConnectionModal";
import { useState } from "react";
import MakeConnectionModal from "../components/common/MakeConnectionModal";

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
    padding: 0 30px;
    box-sizing: border-box;
  }
`;

const MobileWrapper = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MyPageH1 = styled.h1`
  @media (min-width: 1025px) {
    display: block;

    margin-top: 90px;
    margin-bottom: 77px;

    text-align: center;
    font-family: "Godo", sans-serif;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -2.52px;
    color: #173147;
  }

  @media (max-width: 1024px) {
    margin-top: 100px;
    margin-bottom: 50px;
    font-family: "Godo", sans-serif;
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -1.56px;
    text-align: left;
    color: #173147;
  }
`;

const SmallMenu = styled.div`
  margin-left: 75px;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.8px;
  text-align: left;
  color: #000000;

  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-bottom: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -0.64px;
    text-align: left;
    color: #000000;
  }
`;

const FlexBox = styled.div`
  display: flex;
`;

const ResponsiveBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

function MyPage() {
  const [modal, toggleModal] = useState(false);
  const [connectionModal, toggleConnectionModal] = useState(true);
  const [receivedConnectionModal, toggleReceivedConnectionModal] = useState(
    false
  );
  return (
    <>
      <PC>
        <div>
          <Header />
          <MyPageH1>마이페이지</MyPageH1>
          <ResponsiveBlock>
            <SmallMenu>회원 정보 수정</SmallMenu>
          </ResponsiveBlock>

          <FlexBox>
            <MyPageContent />
          </FlexBox>
          <Footer />
        </div>
      </PC>

      <div>
        {modal && (
          <ShowRedundantID
            close={() => {
              toggleModal(!modal);
            }}
          />
        )}
      </div>

      <div>
        {connectionModal && (
          <MakeConnectionModal
            close={() => {
              toggleConnectionModal(!connectionModal);
            }}
          />
        )}
      </div>

      <div>
        {receivedConnectionModal && (
          <ReceiveConnectionModal
            close={() => {
              toggleReceivedConnectionModal(!receivedConnectionModal);
            }}
          />
        )}
      </div>

      <MobileWrapper>
        <Header />
        <Mobile>
          <MyPageH1>마이페이지</MyPageH1>
          <SmallMenu>회원 정보 수정</SmallMenu>
          <MyPageContent />
        </Mobile>
        <Footer />
      </MobileWrapper>
    </>
  );
}

export default MyPage;
