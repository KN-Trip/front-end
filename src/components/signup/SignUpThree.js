import React from "react";
import styled from "styled-components";
import { Description, Button, ColorButton, ButtonWrapper } from "./SignUpTwo";
import { setStep } from "../../modules/signup";
import { useHistory } from "react-router-dom";

const DecorateID = styled.strong`
  color: #000000;
  font-weight: bold;
`;
function SignUpThree() {
  let history = useHistory();
  return (
    <div>
      <Description>
        꽁냥트립 가입하신 아이디는 <DecorateID>dmsgp0829</DecorateID> 입니다.
        <br /> 가입하신 아이디와 비밀번호로 로그인이 가능합니다.
      </Description>

      <ButtonWrapper>
        <Button
          onClick={() => {
            setStep(1);
            history.push("/");
          }}
        >
          메인화면
        </Button>
        <ColorButton
          onClick={async () => {
            setStep(1);
            history.push("/login");
          }}
        >
          로그인
        </ColorButton>
      </ButtonWrapper>
    </div>
  );
}

export default SignUpThree;
