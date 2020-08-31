import React from "react";
import styled from "styled-components";
import { Description, Button, ColorButton, ButtonWrapper } from "./SignUpTwo";
import { setStep } from "../../modules/signup";
import { useHistory } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const PC = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    display: block;
  }
`;

const Mobile = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    display: block;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;
const DecorateID = styled.strong`
  color: #000000;
  font-weight: bold;
`;
function SignUpThree() {
  let history = useHistory();
  const signUpInfo = useSignUp();

  return (
    <>
      <PC>
        <div>
          <Description>
            꽁냥트립 가입하신 아이디는 <DecorateID>{signUpInfo.id}</DecorateID>
            입니다.
            <br /> 가입하신 아이디와 비밀번호로 로그인이 가능합니다.
          </Description>

          <ButtonWrapper>
            <Button
              onClick={() => {
                signUpInfo.clearSignUp();
                history.push("/");
              }}
            >
              메인화면
            </Button>
            <ColorButton
              onClick={async () => {
                signUpInfo.clearSignUp();
                history.push("/login");
              }}
            >
              로그인
            </ColorButton>
          </ButtonWrapper>
        </div>
      </PC>

      <Mobile>
        <div>
          <Description>
            꽁냥트립 가입하신 아이디는 <br />
            <DecorateID>{signUpInfo.id}</DecorateID>
            입니다.
            <br /> 가입하신 아이디와 비밀번호로
            <br /> 로그인이 가능합니다.
          </Description>
        </div>
        <ButtonWrapper>
          <ColorButton
            onClick={async () => {
              signUpInfo.clearSignUp();
              history.push("/login");
            }}
          >
            로그인
          </ColorButton>

          <Button
            onClick={() => {
              signUpInfo.clearSignUp();
              history.push("/");
            }}
          >
            메인화면
          </Button>
        </ButtonWrapper>
      </Mobile>
    </>
  );
}

export default SignUpThree;
