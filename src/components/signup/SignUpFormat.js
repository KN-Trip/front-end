import React from "react";
import styled from "styled-components";
import SignUpOne from "./SignUpOne";
import SignUpTwo from "./SignUpTwo";
import SignUpThree from "./SignUpThree";
import useSignUpIndex from "../../hooks/useSignUpIndex";
import SignUpStep from "./SignUpStep";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 465px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  display: block;

  margin-top: 86px;
  margin-bottom: 50px;

  font-family: "Godo", sans-serif;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -2.52px;

  color: #173147;

  white-space: nowrap;

  @media (max-width: 1024px) {
    margin-top: 50px;
    font-size: 26px;
  }
`;

const setTitleByStep = (step) => {
  if (step === 1) return "회원가입";
  if (step === 2) return "상대방의 아이디를 입력해주세요";
  if (step === 3) return "환영합니다!\n가입이 완료되었습니다.";
};

const getSignUpStep = (step, setStep) => {
  if (step === 1) return <SignUpOne setStep={setStep} />;
  if (step === 2) return <SignUpTwo setStep={setStep} />;
  if (step === 3) return <SignUpThree setStep={setStep} />;
};

function SignUpFormat() {
  const [step, setStep] = useSignUpIndex();
  console.log(step);
  return (
    <>
      <SignUpStep index={step} />
      <Wrapper>
        <Title>{setTitleByStep(step)}</Title>
        {getSignUpStep(step, setStep)}
      </Wrapper>
    </>
  );
}

export default SignUpFormat;
