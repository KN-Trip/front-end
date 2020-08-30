import React, { useState } from "react";
import styled from "styled-components";

import CR from "../../assets/radiobutton-checked.png";
import DR from "../../assets/radiobutton-default.png";

import useSignUp from "../../hooks/useSignUp";
import signup from "../../modules/signup";

const Wrapper = styled.div`
  width: 300px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const CautionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 30px;
`;

const FakeBlock = styled.div`
  width: 1px;
`;

const Caution = styled.span`
  display: block;

  margin-left: auto;

  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #000000;
`;

const InputList = styled.ul`
  display: block;
  margin: 0 auto 50px auto;

  width: 100%;
`;

const InputItem = styled.li`
  display: block;
  margin-bottom: 30px;
`;
const Label = styled.div`
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.56px;
  text-align: left;
  color: #424242;
`;
const Input = styled.input`
  width: 340px;
  box-sizing: border-box;

  padding: 16px 0px;

  border: 0px;
  border-bottom: 1px solid #e0e0e0;

  outline: none;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const RadioWrapper = styled.div`
  display: flex;

  align-items: center;

  margin-bottom: 20px;
`;

const RadioLabel = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.48px;
  text-align: left;
  color: #757575;
`;

const RadioInput = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 10px;

  background-image: url(${(props) => (props.checked ? CR : DR)});
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 48px;
  border-radius: 24px;

  font-size: 14px;
  font-weight: bold;

  background-color: #f85c5c;
  color: white;

  &:hover {
    background-color: #fd8989;
  }
`;

function SignUpOne({ setStep }) {
  const signUpData = useSignUp();
  const [radio, setRadio] = useState(false);

  if (signUpData.checkID_loading) {
    return <div>asdf</div>;
  }

  if (signUpData.checkID_error) {
    return <div>에러남</div>;
  }
  return (
    <Wrapper>
      <CautionWrapper>
        <FakeBlock />
        <Caution>* 필수 입력 사항</Caution>
      </CautionWrapper>

      <InputList>
        <InputItem>
          <Label>닉네임 *</Label>
          <Input
            placeholder="닉네임을 10자이내로 입력해주세요."
            value={signUpData.nickname}
            name="nickname"
            onChange={signUpData.onChangeInput}
          />
        </InputItem>

        <InputItem>
          <Label>아이디 *</Label>
          <Input
            placeholder="아이디를 입력해주세요."
            value={signUpData.id}
            name="id"
            onChange={signUpData.onChangeInput}
          />
        </InputItem>

        <InputItem>
          <Label>비밀번호 *</Label>
          <Input
            placeholder="6~20자의 영문과 숫자로 입력해주세요."
            type="password"
            name="password"
            value={signUpData.password}
            onChange={signUpData.onChangeInput}
          />
        </InputItem>

        <InputItem>
          <Label>비밀번호 재입력*</Label>
          <Input
            placeholder="6~20자의 영문과 숫자로 입력해주세요"
            name="checkPassword"
            type="password"
            value={signUpData.checkPassword}
            onChange={signUpData.onChangeInput}
          />
        </InputItem>

        <RadioWrapper>
          <RadioInput
            checked={radio}
            onClick={() => {
              setRadio(!radio);
            }}
          />
          <RadioLabel>이용약관 및 개인 정보 보호 정책에 동의합니다.</RadioLabel>
        </RadioWrapper>
      </InputList>

      <ButtonWrapper>
        <SignUpButton
          onClick={async () => {
            const regPwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/; // 6 ~ 20 글자수의 영문, 숫자 판별 정규식

            if (!radio) {
              alert("이용약관에 동의 해주세요.");
            }
            //Form Validation
            else if (signUpData.checkPassword !== signUpData.password) {
              alert("비밀번호를 다시 확인해주세요.");
            } else if (signUpData.password.length === 0) {
              alert("비밀번호를 입력해주세요.");
            } else if (signUpData.id.length === 0) {
              alert("아이디를 입력해주세요.");
            } else if (signUpData.nickname.length === 0) {
              alert("닉네임을 입력해주세요.");
            } else if (!regPwd.test(signUpData.password)) {
              alert("비밀번호는 6~20자의 영문과 숫자로 입력해주세요.");
            } else {
              await signUpData.checkExistID();
            }
          }}
        >
          회원가입
        </SignUpButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SignUpOne;
