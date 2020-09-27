import React from 'react';
import styled from 'styled-components';

import * as IconLib from '../../lib/icon';
import clearIco from '../../assets/clear.png';

import { ButtonTemplate } from './Button';
const Background = styled.div`
  position: fixed;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  z-index: 30;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.29);

  overflow-y: hidden;

  @media (max-width: 1024px) {
    padding: 30px 27px;
    box-sizing: border-box;
  }
`;

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
  }
`;

const Modal = styled.div`
  @media (min-width: 1025px) {
    padding: 30px;
    width: 1024px;
    height: 300px;
    border-radius: 30px;
    box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
    background-color: #ffffff;
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    height: 349px;

    border-radius: 30px;
    box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
    background-color: #ffffff;
    box-sizing: border-box;

    padding: 30px 15px;

    overflow-y: auto;
  }
`;
const ClearIconWrapper = styled.div`
  margin-left: auto;

  width: 24px;
  height: 24px;

  cursor: pointer;
`;

const Text = styled.div`
  margin-left: 70px;
  margin-top: 60px;
  margin-bottom: 38px;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -1px;
  text-align: left;
  color: #757575;

  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 38px;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: -0.56px;
    text-align: left;
    color: #757575;
  }
`;

const Strong = styled.strong`
  font-family: 'Montserrat', sans-serif;
  font-weight: 1000;
  color: #f85c5c;
`;

const StyledButton = styled(ButtonTemplate)`
  background-color: #f85c5c !important;

  font-weight: bold;
  color: #ffffff;

  cursor: pointer;
  user-select: none;

  @media (min-width: 1025px) {
    margin-left: 20px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 18px;
  }
`;

const PlainButton = styled(ButtonTemplate)`
  background-color: #ffffff !important;

  font-weight: bold;
  color: #757575;

  border: solid 1px #bdbdbd;
  cursor: pointer;
  user-select: none;

  @media (min-width: 1024px) {
    margin-left: auto;
  }
`;

const FlexBox = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function ReceiveConnectionModal({
  close,
  connectionData,
  processCouple,
}) {
  return (
    <>
      <PC>
        <Background>
          <Modal>
            <ClearIconWrapper onClick={close}>
              <div>{IconLib.getImgIcon(clearIco, 24, 24)}</div>
            </ClearIconWrapper>

            <Text>
              <Strong>{connectionData.mem_id}</Strong> 님이 연결을 요청했습니다.
              <br /> 수락 하시겠습니까?
            </Text>

            <FlexBox>
              <PlainButton
                onClick={async () => {
                  await processCouple(false);
                  close();
                }}
              >
                거절하기
              </PlainButton>
              <StyledButton
                onClick={async () => {
                  await processCouple(true);
                  close();
                }}
              >
                수락하기
              </StyledButton>
            </FlexBox>
          </Modal>
        </Background>
      </PC>
      <Mobile>
        <Background>
          <Modal>
            <ClearIconWrapper onClick={close}>
              <div>{IconLib.getImgIcon(clearIco, 24, 24)}</div>
            </ClearIconWrapper>
            <Text>
              <Strong>{connectionData.mem_id}</Strong> 님이 연결을 요청했습니다.
              <br /> 수락 하시겠습니까?
            </Text>

            <FlexBox>
              <StyledButton
                onClick={async () => {
                  await processCouple(true);
                  close();
                }}
              >
                수락하기
              </StyledButton>
              <PlainButton
                onClick={async () => {
                  await processCouple(false);
                  close();
                }}
              >
                거절하기
              </PlainButton>
            </FlexBox>
          </Modal>
        </Background>
      </Mobile>
    </>
  );
}
