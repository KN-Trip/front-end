import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import LoginResponsive from "./LoginResponsive";
import useLoginInput from "../../hooks/useLoginInput";
import Divider from "../common/Divider";

import * as IconLib from "../../lib/icon";
import kakaoIco from "../../assets/kakao.png";
import naverIco from "../../assets/naver.png";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 183px;
`;

const LoginTextWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 70px;
`;

const LoginText = styled.h2`
  font-family: "Godo", sans-serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -1.68px;
  text-align: left;
  color: #173147;
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

  &:focus {
    outline: none;
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
`;
const SocialLoginList = styled.ul`
  display: flex;
`;
const SocialLabel = styled.div`
  margin-right: 32px;
  white-space: nowrap;
`;
const SocialItem = styled.li`
  display: flex;
  align-items: center;

  margin-right: 32px;

  white-space: nowrap;
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

function LoginForm() {
  const [id, password, onChange] = useLoginInput();
  let history = useHistory();
  return (
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
            <SaveIdCheckBox type="checkbox" />
            <SaveIdLabel>아이디 저장</SaveIdLabel>
          </SaveIdCheckBoxWrapper>

          <SignUpText
            onClick={() => {
              history.push("./signup");
            }}
          >
            회원가입
          </SignUpText>
        </SaveIDAndSignUpWrapper>

        <LoginButton>로그인</LoginButton>

        <MarginDivider />

        <SNSLoginWrapper>
          <SocialLabel>간편 SNS 로그인</SocialLabel>
          <SocialLoginList>
            <SocialItem>
              <CursorDiv>{IconLib.getImgIcon(kakaoIco, 40, 40)}</CursorDiv>
              <HorizontalMargin margin="16px" />
              <div>카카오</div>
            </SocialItem>

            <SocialItem>
              <CursorDiv>{IconLib.getImgIcon(naverIco, 40, 40)}</CursorDiv>
              <HorizontalMargin margin="16px" />
              <div>네이버</div>
            </SocialItem>
          </SocialLoginList>
        </SNSLoginWrapper>
      </LoginResponsive>
    </Wrapper>
  );
}

export default LoginForm;
