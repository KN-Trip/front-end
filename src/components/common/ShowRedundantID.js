import React, { useState } from "react";
import styled from "styled-components";
import * as IconLib from "../../lib/icon";
import clearIco from "../../assets/clear.png";
import RadioChecked from "../../assets/radiobutton-checked.png";
import RadioDefault from "../../assets/radiobutton-default.png";
import Button, { ButtonTemplate } from "./Button";

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
    height: 630px;
    border-radius: 30px;
    box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
    background-color: #ffffff;
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    height: 100%;

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

const ShowCntOfIDBanner = styled.div`
  margin-left: 30px;
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -1px;
  text-align: left;
  color: #757575;

  @media (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 30px;
    margin-left: 15px;
    font-size: 14px;

    font-stretch: normal;
    font-style: normal;
    line-height: 1.86;
    letter-spacing: -0.56px;
    text-align: left;
    color: #757575;
  }
`;

const Strong = styled.strong`
  color: #f85c5c;
`;

const Content = styled.div`
  padding: 63px 70px;
`;

const TableWrapper = styled.div`
  display: block;
  width: 824px;
  height: 250px;
  overflow-y: scroll;

  padding-right: 30px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #e0e0e0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #f85c5c;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 238px;
    padding-right: 0px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
`;

const StyledTr = styled.tr`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;

  color: ${(props) => (props.checked ? "#f85c5c" : "#757575")};
  cursor: pointer;
`;

const StyledHeadTr = styled(StyledTr)`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #f7f7f7;
  box-sizing: border-box;
  border-top: 1px solid #e0e0e0;
  border-bottom: 0px;
`;

const StyledTh = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 32px;
  box-sizing: border-box;

  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.72px;
  text-align: left;
  color: #757575;

  @media (max-width: 1024px) {
    padding-left: 0;
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: 14px;
  }
`;

const IDStyledTh = styled(StyledTh)`
  padding-left: 78px;

  @media (max-width: 1024px) {
    padding-left: 28px;
  }
`;
const StyledTd = styled.td`
  padding-left: 32px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;

  @media (max-width: 1024px) {
    padding-left: 0px;
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 14px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

const HorizontalMargin = styled.div`
  margin-left: ${(props) => props.margin};
`;

const PlainButton = styled(ButtonTemplate)`
  background-color: #ffffff !important;

  font-weight: bold;
  color: #757575;

  border: solid 1px #bdbdbd;
  cursor: pointer;
  user-select: none;
`;

const StyledButton = styled(ButtonTemplate)`
  background-color: #f85c5c !important;

  font-weight: bold;
  color: #ffffff;

  cursor: pointer;
  user-select: none;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const setRadioChecked = (checked) => {
  return checked
    ? IconLib.getImgIcon(RadioChecked, 20, 20)
    : IconLib.getImgIcon(RadioDefault, 20, 20);
};
export default function ShowRedundantID({ close }) {
  const [index, setIndex] = useState(null);
  const fakeJson = [
    {
      id: "asdf",
      nickname: "랄럴랄",
      created_at: "20.06.18",
    },
    {
      id: "asdf",
      nickname: "랄럴랄",
      created_at: "20.06.18",
    },
    {
      id: "asdf",
      nickname: "랄럴랄",
      created_at: "20.06.18",
    },
    {
      id: "asdf",
      nickname: "랄럴랄",
      created_at: "20.06.18",
    },
    {
      id: "asdf",
      nickname: "랄럴랄",
      created_at: "20.06.18",
    },
    {
      id: "asdf",
      nickname: "랄럴랄",
      created_at: "20.06.18",
    },
  ];
  return (
    <>
      <PC>
        <Background>
          <Modal>
            <ClearIconWrapper onClick={close}>
              {IconLib.getImgIcon(clearIco, 24, 24)}
            </ClearIconWrapper>
            <Content>
              <ShowCntOfIDBanner>
                상대방 정보와 일치하는 아이디를 <Strong>5개</Strong>{" "}
                발견했습니다.
              </ShowCntOfIDBanner>
              <TableWrapper>
                <StyledTable>
                  <StyledHeadTr>
                    <IDStyledTh>아이디</IDStyledTh>
                    <StyledTh>닉네임</StyledTh>
                    <StyledTh>가입일</StyledTh>
                  </StyledHeadTr>
                  {fakeJson.map((v, i) => (
                    <StyledTr
                      onClick={() => {
                        setIndex(i);
                      }}
                      checked={index === i}
                    >
                      <StyledTd>
                        <FlexBox>
                          <div>{setRadioChecked(index === i)}</div>
                          <HorizontalMargin margin="24px" />
                          <div>{v.id}</div>
                        </FlexBox>
                      </StyledTd>
                      <StyledTd>{v.nickname}</StyledTd>
                      <StyledTd>{v.created_at}</StyledTd>
                    </StyledTr>
                  ))}
                </StyledTable>
              </TableWrapper>
            </Content>
            <FlexBox>
              <HorizontalMargin margin="auto" />
              <PlainButton onClick={close}>취소</PlainButton>
              <HorizontalMargin margin="20px" />
              <StyledButton>확인</StyledButton>
            </FlexBox>
          </Modal>
        </Background>
      </PC>
      <Mobile>
        <Background>
          <Modal>
            <ClearIconWrapper onClick={close}>
              {IconLib.getImgIcon(clearIco, 24, 24)}
            </ClearIconWrapper>
            <ShowCntOfIDBanner>
              상대방 정보와 일치하는 아이디를
              <br />
              <Strong>5개</Strong> 발견했습니다.
            </ShowCntOfIDBanner>
            <TableWrapper>
              <StyledTable>
                <StyledHeadTr>
                  <IDStyledTh>아이디</IDStyledTh>
                  <StyledTh>닉네임</StyledTh>
                  <StyledTh>가입일</StyledTh>
                </StyledHeadTr>
                {fakeJson.map((v, i) => (
                  <StyledTr
                    onClick={() => {
                      setIndex(i);
                    }}
                    checked={index === i}
                  >
                    <StyledTd>
                      <FlexBox>
                        <div>{setRadioChecked(index === i)}</div>
                        <HorizontalMargin margin="8px" />
                        <div>{v.id}</div>
                      </FlexBox>
                    </StyledTd>
                    <StyledTd>{v.nickname}</StyledTd>
                    <StyledTd>{v.created_at}</StyledTd>
                  </StyledTr>
                ))}
              </StyledTable>
            </TableWrapper>

            <VerticalMargin margin="50px" />
            <Center>
              <StyledButton>확인</StyledButton>
              <VerticalMargin margin="20px" />
              <PlainButton onClick={close}>취소</PlainButton>
            </Center>
          </Modal>
        </Background>
      </Mobile>
    </>
  );
}
