import React from "react";
import styled from "styled-components";
import { ButtonTemplate } from "../common/Button";
import * as IconLib from "../../lib/icon";
import profile from "../../assets/profile.png";
import LikingTourPlace from "./LikingTourPlace";
import ClickedTourPlace from "./ClickedTourPlace";
const ResponsiveBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  align-items: center;

  padding: 55px 75px;

  width: 1024px;
  height: 300px;
  border-radius: 30px;
  box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
  background-color: #ffffff;

  box-sizing: border-box;
`;

const VerticalDivider = styled.div`
  height: 100%;

  border: 1px solid #f5f5f5;
`;
const WhiteButton = styled(ButtonTemplate)`
  border: solid 1px #bdbdbd;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;
const StyledButton = styled(ButtonTemplate)`
  background-color: #f85c5c;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #ffffff;
`;

const SmallMenu = styled.div`
  margin-left: 75px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.8px;
  text-align: left;
  color: #000000;
`;

const FlexBox = styled.div`
  display: flex;
`;

const HorizontalMargin = styled.div`
  margin-left: ${(props) => props.margin};
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;
  background-color: #f5f5f5;

  border-radius: 100%;
`;

const ProfileName = styled.span`
  display: block;

  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.64;
  letter-spacing: -1px;
  text-align: left;
  color: #757575;
`;

const SmallName = styled.span`
  display: block;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.56px;
  text-align: left;
  color: #424242;
`;

const Input = styled.input`
  width: 340px;
  box-sizing: border-box;

  padding: 16px 34px;

  border: 0px;
  border-bottom: 1px solid #e0e0e0;

  outline: none;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VerticalFlex = styled.div`
  display: flex;
  align-items: center;
`;

const CoupleInputBanner = styled.p`
  display: block;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -1px;
  text-align: left;
  color: #757575;
`;

const Strong = styled.strong`
  font-weight: 900;
`;

const ExplainCouple = styled.h3`
  display: block;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: -0.56px;
  text-align: left;
  color: #757575;
`;

export default function Mypagecontent() {
  return (
    <>
      <ResponsiveBlock>
        <Box>
          <div>
            <ProfileWrapper>
              {IconLib.getImgIcon(profile, 55, 55)}
            </ProfileWrapper>
            <VerticalMargin margin="30px" />
            <ProfileName>랄라랄라님</ProfileName>
          </div>

          <HorizontalMargin margin="57px" />
          <VerticalDivider />
          <HorizontalMargin margin="74px" />
          <div>
            <VerticalFlex>
              <SmallName>닉네임</SmallName>
              <HorizontalMargin margin="67px" />
              <Input placeholder="닉네임을 10자 이내로 입력해주세요." />
            </VerticalFlex>

            <VerticalFlex>
              <SmallName>아이디</SmallName>
              <HorizontalMargin margin="67px" />
              <Input placeholder="아이디를 입력해주세요." />
            </VerticalFlex>

            <VerticalFlex>
              <SmallName>비밀번호</SmallName>
              <HorizontalMargin margin="55px" />
              <Input
                placeholder="비밀번호를 8자 이상 입력해주세요."
                type="password"
              />
            </VerticalFlex>
          </div>
        </Box>

        <VerticalMargin margin="50px" />

        <FlexBox>
          <HorizontalMargin margin="auto" />
          <StyledButton>수정하기</StyledButton>
        </FlexBox>
        <VerticalMargin margin="70px" />

        <SmallMenu>커플 등록하기</SmallMenu>

        <VerticalMargin margin="50px" />
        <Box>
          <CoupleInputBanner>
            <Strong>상대방</Strong>의
            <br />
            <Strong>아이디</Strong>를
            <br />
            입력해주세요
          </CoupleInputBanner>

          <HorizontalMargin margin="62px" />
          <VerticalDivider />
          <HorizontalMargin margin="74px" />

          <div>
            <VerticalFlex>
              <SmallName>상대방 아이디</SmallName>
              <HorizontalMargin margin="55px" />
              <Input placeholder="닉네임을 입력해주세요." />
            </VerticalFlex>

            <VerticalMargin margin="38px" />

            <ExplainCouple>
              서로의 해시태그를 분석하여 최적화된 여행지를 알려드리기 위해
              <br />
              상대방의 아이디가 필요합니다. 필요로 하지 않으실 경우 건너뛸 수
              있습니다.
            </ExplainCouple>
          </div>
        </Box>
        <VerticalMargin margin="50px" />

        <FlexBox>
          <HorizontalMargin margin="auto" />
          <WhiteButton>연결해제</WhiteButton>
          <HorizontalMargin margin="20px" />
          <StyledButton>수정하기</StyledButton>
        </FlexBox>

        <LikingTourPlace />
        <ClickedTourPlace />
      </ResponsiveBlock>
    </>
  );
}
