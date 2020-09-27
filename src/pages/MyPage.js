import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/common/Footer';

import MyPageContent from '../components/mypage/MyPageContent';
import ShowRedundantID from '../components/common/ShowRedundantID';

import { useState } from 'react';

import useSignUp from '../hooks/useSignUp';
import useLogin from '../hooks/useLogin';
import { useHistory } from 'react-router-dom';

const PC = styled.div`
  @media (min-width: 1025px) {
    display: block;
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    display: none;
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: 700;
  }
`;

const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    display: block;
    padding: 0 30px;
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif !important;
    font-weight: 700;
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
    font-family: 'Godo', sans-serif;
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
    font-family: 'Godo', sans-serif;
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
  font-weight: 900;
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
  const [connectionModal, toggleConnectionModal] = useState(false);

  const signUp = useSignUp();
  const postCouple = signUp.onPostCoupleRequest;

  const [
    login,
    login_loading,
    login_error,
    loginRequest,
    nickname,
    onClearLogin,
  ] = useLogin();

  const history = useHistory();

  const signUpdata = useSignUp();

  if (!login) {
    alert('로그인 하신 뒤에 이용해 주세요.');
    history.push('/login');
  }

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
            <MyPageContent
              signUpdata={signUpdata}
              toggleCoupleModal={() => {
                toggleConnectionModal(!connectionModal);
              }}
              nickname={nickname}
              refuseConnect={() => {
                postCouple(false);
              }}
            />
          </FlexBox>
          <Footer />
        </div>
      </PC>

      <div>
        {connectionModal && (
          <ShowRedundantID
            close={() => {
              toggleConnectionModal(!connectionModal);
            }}
            setPostOK={(option, id) => {
              postCouple(option, id);
            }}
          />
        )}
      </div>

      <MobileWrapper>
        <Header />
        <Mobile>
          <MyPageH1>마이페이지</MyPageH1>
          <SmallMenu>회원 정보 수정</SmallMenu>
          <MyPageContent
            signUpdata={signUpdata}
            toggleCoupleModal={() => {
              toggleModal(!modal);
            }}
            nickname={nickname}
          />
        </Mobile>
        <Footer />
      </MobileWrapper>
    </>
  );
}

export default MyPage;
