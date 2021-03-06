import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import LoginResponsive from './LoginResponsive';
import useLoginInput from '../../hooks/useLoginInput';
import useLogin from '../../hooks/useLogin';
import Divider from '../common/Divider';

import * as IconLib from '../../lib/icon';
import kakaoIco from '../../assets/kakao.png';
import naverIco from '../../assets/naver.png';
import { useHistory } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import signup, { setRadio } from '../../modules/signup';

import defaultRadio from '../../assets/radiobutton-default.png';
import checkedRadio from '../../assets/radiobutton-checked.png';

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
  }
`;

const Wrapper = styled.div`
  margin-top: 183px;
`;

const LoginTextWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 70px;

  @media (max-width: 1024px) {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;

    line-height: 1.54;
    letter-spacing: -1.56px;
    text-align: left;
    color: #173147;
  }
`;

const LoginText = styled.h2`
  font-family: 'Godo', sans-serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -1.68px;
  text-align: left;
  color: #173147;

  @media (max-width: 1024px) {
    font-size: 26px;
  }
`;

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 116px;

  box-sizing: border-box;
`;

const LoginInput = styled.input`
  width: 360px;
  height: 48px;

  padding: 16px 34px;

  box-sizing: border-box;

  border-radius: 24px;
  border: solid 1px #bdbdbd;
  background-color: #ffffff;
  color: black !important;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SaveIDAndSignUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SaveIdCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SaveIdCheckBox = styled.input`
  width: 20px;
  height: 20px;

  margin-right: 20px;

  border-radius: 100%;
  background-color: #757575;
`;

const SaveIdLabel = styled.label`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 5.5;
  letter-spacing: -0.48px;
  text-align: left;
  color: #757575;
`;

const SignUpText = styled.div`
  font-size: 12px;
  text-decoration: underline;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 5.5;
  letter-spacing: -0.48px;
  text-align: left;
  color: #757575;

  &:hover {
    cursor: pointer;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 48px;

  margin-bottom: 20px;

  border-radius: 24px;
  background-color: #f85c5c;

  font-weight: bold;
  color: #ffffff;

  user-select: none;

  &:hover {
    background-color: #fd8989;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const MarginDivider = styled(Divider)`
  margin-bottom: 20px;
`;

const SNSLoginWrapper = styled.div`
  margin-top: 20px;
  display: flex;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: #757575;

  @media (max-width: 1024px) {
    line-height: 1;
    margin-top: 20px;
  }
`;
const SocialLoginList = styled.ul`
  display: flex;
`;
const SocialLabel = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.56px;
  text-align: left;
  color: #757575;

  margin-right: 32px;
  white-space: nowrap;

  @media (max-width: 1024px) {
    margin-top: 30px;
    margin-right: 14px;
  }
`;

const RadioWrapper = styled.div`
  margin-right: 10px;
`;
const SocialItem = styled.li`
  display: flex;
  align-items: center;

  margin-right: 32px;

  white-space: nowrap;

  @media (max-width: 1024px) {
    margin-right: 20px;
  }
`;
const ColorCircle = styled.div`
  width: 48px;
  height: 48px;

  margin-right: 16px;

  border-radius: 100%;
  background-color: ${(props) => props.bgcolor};

  &:hover {
    cursor: pointer;
  }
`;

const HorizontalMargin = styled.div`
  margin-right: ${(props) => props.margin};
`;

const CursorDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
  }
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

function LoginForm() {
  const [id, password, onChange] = useLoginInput();
  const [
    login,
    login_loading,
    login_error,
    loginRequest,
    nickname,
    onClearLogin,
  ] = useLogin();

  const { getNaverLoginRequest, getKakaoLoginRequest } = useSignUp();
  let history = useHistory();
  const [radioChecked, setRadiochecked] = useState(false);

  if (login_loading) return <div></div>;
  if (login_error === 'fail') onClearLogin();
  if (login_error) return <div>로그인 에러. 다시 시도해주세요</div>;
  if (login) {
    history.push('/');
  }
  return (
    <>
      <PC>
        <Wrapper>
          <LoginResponsive>
            <LoginTextWrapper>
              <LoginText>로그인</LoginText>
            </LoginTextWrapper>

            <LoginInputWrapper>
              <LoginInput
                placeholder="아이디 입력"
                type="text"
                name="id"
                value={id}
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <LoginInput
                placeholder="비밀번호 입력"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </LoginInputWrapper>
            <SaveIDAndSignUpWrapper>
              <SaveIdCheckBoxWrapper>
                <RadioWrapper
                  onClick={() => {
                    setRadiochecked(!radioChecked);
                  }}
                >
                  {radioChecked
                    ? IconLib.getImgIcon(checkedRadio, 24, 24)
                    : IconLib.getImgIcon(defaultRadio, 24, 24)}
                </RadioWrapper>
                <SaveIdLabel>아이디 저장</SaveIdLabel>
              </SaveIdCheckBoxWrapper>

              <SignUpText
                onClick={() => {
                  history.push('./signup');
                }}
              >
                회원가입
              </SignUpText>
            </SaveIDAndSignUpWrapper>

            <LoginButton onClick={loginRequest}>로그인</LoginButton>
          </LoginResponsive>
        </Wrapper>
      </PC>

      <Mobile>
        <LoginTextWrapper>
          <LoginText>로그인</LoginText>
        </LoginTextWrapper>
        <LoginInputWrapper>
          <LoginInput
            placeholder="아이디 입력"
            type="text"
            name="id"
            value={id}
            onChange={(e) => {
              onChange(e);
            }}
          />
          <LoginInput
            placeholder="비밀번호 입력"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </LoginInputWrapper>

        <SaveIDAndSignUpWrapper>
          <SaveIdCheckBoxWrapper>
            <RadioWrapper
              onClick={() => {
                setRadiochecked(!radioChecked);
              }}
            >
              {radioChecked
                ? IconLib.getImgIcon(checkedRadio, 24, 24)
                : IconLib.getImgIcon(defaultRadio, 24, 24)}
            </RadioWrapper>
            <SaveIdLabel>아이디 저장</SaveIdLabel>
          </SaveIdCheckBoxWrapper>

          <SignUpText
            onClick={() => {
              history.push('./signup');
            }}
          >
            회원가입
          </SignUpText>
        </SaveIDAndSignUpWrapper>

        <LoginButton onClick={loginRequest}>로그인</LoginButton>
      </Mobile>
    </>
  );
}

export default LoginForm;
