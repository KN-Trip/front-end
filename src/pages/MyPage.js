import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/common/Footer";
import MyPageNav from "../components/mypage/MyPageNav";
import MyPageContent from "../components/mypage/MyPageContent";

const MyPageH1 = styled.h1`
  display: block;

  margin-top: 90px;
  margin-bottom: 77px;

  text-align: center;
  font-family: "Godo", sans-serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  line-height: 1.57;
  letter-spacing: -2.52px;
  color: #173147;
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
`;

const FlexBox = styled.div`
  display: flex;
`;

const ResponsiveBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

function MyPage() {
  return (
    <>
      <div>
        <Header />
        <MyPageH1>마이페이지</MyPageH1>
        <ResponsiveBlock>
          <SmallMenu>회원 정보 수정</SmallMenu>
        </ResponsiveBlock>

        <FlexBox>
          <MyPageNav />
          <MyPageContent />
        </FlexBox>
        <Footer />
      </div>
    </>
  );
}

export default MyPage;
