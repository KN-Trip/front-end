import React, { useState } from 'react';
import styled from 'styled-components';
import useSignUp from '../../hooks/useSignUp';
import ShowRedundantID from '../common/ShowRedundantID';

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
  @media (max-width: 1024px) {
    display: block;

    box-sizing: border-box;
  }
`;

const CoupleIDWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const CoupleIDLabel = styled.div`
  margin-right: 27px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: #424242;

  @media (max-width: 1024px) {
    margin-right: 0;
    font-weight: 900;
  }
`;
const CoupleIDInput = styled.input`
  width: 340px;
  box-sizing: border-box;

  padding: 16px 34px;

  border: 0px;
  border-bottom: 1px solid #e0e0e0;

  outline: none;

  @media (max-width: 1024px) {
    padding: 16px 0px;
  }
`;

export const Description = styled.h3`
  display: block;
  white-space: nowrap;

  margin-top: 38px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: -0.56px;
  text-align: center;
  color: #757575;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 73px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 70px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 170px;
  height: 48px;

  margin-right: 20px;
  border-radius: 24px;

  border: solid 1px #bdbdbd;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: #757575;

  &:hover {
    cursor: pointer;
    border: solid 1px #757575;
    background-color: #ffffff;
    color: #000000;
  }
`;

export const ColorButton = styled(Button)`
  background-color: #f85c5c;
  border: 0;

  color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #fd8989;
    border: 0;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

function SignUpTwo({ setStep }) {
  const singUpdata = useSignUp();
  const [isOn, setIsOn] = useState(false);
  const [postOK, setPostOK] = useState(false);

  return (
    <>
      <PC>
        <Wrapper>
          <CoupleIDWrapper>
            <CoupleIDLabel>상대방 아이디</CoupleIDLabel>
            <CoupleIDInput
              placeholder="상대방 아이디를 입력해주세요."
              name="targetID"
              value={singUpdata.targetID}
              onChange={singUpdata.onChangeInput}
            />
          </CoupleIDWrapper>
          <Description>
            서로의 해시태그를 분석하여 최적화된 여행지를 알려드리기 위해
            <br /> 상대방의 아이디가 필요합니다. 필요로 하지 않으실 경우 건너뛸
            수 있습니다.
          </Description>

          <ButtonWrapper>
            <Button
              onClick={async () => {
                await singUpdata.postSignUp();
              }}
            >
              건너뛰기
            </Button>
            <ColorButton
              onClick={async () => {
                if (!postOK) {
                  await singUpdata.candidateRequest();
                  setIsOn(true);
                } else {
                  setStep(3);
                }
              }}
            >
              연결하기
            </ColorButton>
          </ButtonWrapper>
        </Wrapper>
      </PC>

      <Mobile>
        <CoupleIDWrapper>
          <CoupleIDLabel>상대방 아이디</CoupleIDLabel>
          <CoupleIDInput
            placeholder="상대방 아이디를 입력해주세요."
            name="targetID"
            value={singUpdata.targetID}
            onChange={singUpdata.onChangeInput}
          />
        </CoupleIDWrapper>
        <Description>
          서로의 해시태그를 분석하여 최적화된 여행지를
          <br /> 알려드리기 위해 상대방의 아이디가 필요합니다. <br /> 필요로
          하지 않으실 경우 건너뛸 수 있습니다.
        </Description>

        <ButtonWrapper>
          <ColorButton
            onClick={async () => {
              if (!postOK) {
                await singUpdata.candidateRequest();
                setIsOn(true);
                console.log('asdf');
              } else {
                setStep(3);
              }
            }}
          >
            연결하기
          </ColorButton>

          <Button
            onClick={async () => {
              await singUpdata.postSignUp();
            }}
          >
            건너뛰기
          </Button>
        </ButtonWrapper>
      </Mobile>

      {isOn && (
        <ShowRedundantID
          close={() => {
            setIsOn(!isOn);
          }}
          setPostOK={() => {
            setPostOK(true);
          }}
        />
      )}
    </>
  );
}

export default SignUpTwo;
