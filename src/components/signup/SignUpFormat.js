import React from 'react';
import styled from 'styled-components';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import useSignUpIndex from '../../hooks/useSignUpIndex';
import SignUpStep from './SignUpStep';

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
    display: block;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`;

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

  font-family: 'Godo', sans-serif;
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

const SplitedTitle = styled(Title)`
  margin-bottom: 0px;
  margin-top: 0px;

  @media (max-width: 1024px) {
    margin-top: 0px;
    line-height: 1.6;
    font-size: 26px;
  }
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

const setTitleByStep = (step) => {
  if (step === 1) return '회원가입';
  if (step === 2) return '상대방의 아이디를 입력해주세요';
  if (step === 3) return '환영합니다! 가입이 완료되었습니다';
};

const getSignUpStep = (step, setStep) => {
  if (step === 1) return <SignUpOne setStep={setStep} />;
  if (step === 2) return <SignUpTwo setStep={setStep} />;
  if (step === 3) return <SignUpThree setStep={setStep} />;
};

function SignUpFormat() {
  const [step, setStep] = useSignUpIndex();

  return (
    <>
      <SignUpStep index={step} />

      <PC>
        <Wrapper>
          <Title>{setTitleByStep(step)}</Title>
        </Wrapper>
      </PC>

      <Mobile>
        {step !== 3 && (
          <Wrapper>
            <Title>{setTitleByStep(step)}</Title>
          </Wrapper>
        )}

        <div>
          {step === 3 && (
            <VerticalMargin margin="50px">
              <SplitedTitle>환영합니다! </SplitedTitle>
              <SplitedTitle> 가입이 완료되었습니다.</SplitedTitle>
            </VerticalMargin>
          )}
        </div>
      </Mobile>

      <Wrapper>{getSignUpStep(step, setStep)}</Wrapper>
    </>
  );
}

export default SignUpFormat;
