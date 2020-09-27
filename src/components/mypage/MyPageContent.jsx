import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ButtonTemplate } from '../common/Button';
import * as IconLib from '../../lib/icon';
import profile from '../../assets/profile.png';
import LikingTourPlace from './LikingTourPlace';
import ClickedTourPlace from './ClickedTourPlace';
import Divider from '../common/Divider';
import useMyPage from '../../hooks/useMyPage';

const PC = styled.div`
  font-family: 'NanumSquare', sans-serif !important;
  font-weight: 700;

  @media (min-width: 1025px) {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Mobile = styled.div`
  font-family: 'NanumSquare', sans-serif !important;
  font-weight: 700;
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

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

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 50px 15px;

    display: block;
  }
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
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.8px;
  text-align: left;
  color: #000000;

  @media (max-width: 1024px) {
    margin-left: 0px;
    margin-bottom: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: -0.64px;
    text-align: left;
    color: #000000;
  }
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

const ProfileWrapperArranger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: 900;
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

  @media (max-width: 1024px) {
    width: 100%;
    padding: 16px 0;
    margin-bottom: 30px;
  }
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
  white-space: nowrap;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
    text-align: center;
    line-height: 1.6;
  }
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

  @media (max-width: 1024px) {
    line-height: 1.86;
    letter-spacing: -0.56px;
    text-align: left;
    color: #757575;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Mypagecontent({
  signUpdata,
  toggleCoupleModal,
  nickname,
  refuseConnect,
}) {
  const mypage = useMyPage();

  console.log('nickname', nickname);

  useEffect(() => {
    mypage.basketRequest();
    mypage.searchRequest();
  }, []);

  if (mypage.newinfo) {
    alert('정보 변경을 완료했습니다.\n다시 로그인 해주세요.');
    window.location.href = 'http://kntrip.me/login';
  }

  return (
    <div style={{ width: '100%' }}>
      <PC>
        <ResponsiveBlock>
          <Box>
            <ProfileCenter>
              <ProfileWrapper>
                {IconLib.getImgIcon(profile, 55, 55)}
              </ProfileWrapper>
              <VerticalMargin margin="30px" />
              <ProfileName>{`${nickname}님`}</ProfileName>
            </ProfileCenter>

            <HorizontalMargin margin="57px" />
            <VerticalDivider />
            <HorizontalMargin margin="74px" />
            <div>
              <VerticalFlex>
                <SmallName>닉네임</SmallName>
                <HorizontalMargin margin="67px" />
                <Input
                  placeholder="닉네임을 10자 이내로 입력해주세요."
                  name="nickname"
                  value={mypage.nickname}
                  onChange={mypage.onChangeInput}
                />
              </VerticalFlex>

              <VerticalFlex>
                <SmallName>아이디</SmallName>
                <HorizontalMargin margin="67px" />
                <Input
                  placeholder="아이디를 입력해주세요."
                  name="id"
                  value={mypage.id}
                  onChange={mypage.onChangeInput}
                />
              </VerticalFlex>

              <VerticalFlex>
                <SmallName>비밀번호</SmallName>
                <HorizontalMargin margin="55px" />
                <Input
                  placeholder="비밀번호를 8자 이상 입력해주세요."
                  type="password"
                  name="password"
                  value={mypage.password}
                  onChange={mypage.onChangeInput}
                />
              </VerticalFlex>
            </div>
          </Box>

          <VerticalMargin margin="50px" />

          <FlexBox>
            <HorizontalMargin margin="auto" />
            <StyledButton onClick={mypage.newInfoRequest}>
              수정하기
            </StyledButton>
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
                <Input
                  placeholder="아이디를 입력해주세요."
                  name="targetID"
                  value={signUpdata.targetID}
                  onChange={signUpdata.onChangeInput}
                />
              </VerticalFlex>

              <VerticalMargin margin="38px" />

              <ExplainCouple>
                서로의 해시태그를 분석하여 최적화된 여행지를 알려드리기 위해
                상대방의 아이디가 필요합니다.
                <br />
                필요로 하지 않으실 경우 건너뛸 수 있습니다.
              </ExplainCouple>
            </div>
          </Box>
          <VerticalMargin margin="50px" />

          <FlexBox>
            <HorizontalMargin margin="auto" />
            <WhiteButton
              onClick={() => {
                if (window.confirm('연결을 정말로 해제하시겠습니까?')) {
                  alert('연결을 해제하였습니다.');
                  refuseConnect();
                }
              }}
            >
              연결해제
            </WhiteButton>
            <HorizontalMargin margin="20px" />
            <StyledButton
              onClick={async () => {
                await signUpdata.candidateRequest();
                toggleCoupleModal();
              }}
            >
              연결하기
            </StyledButton>
          </FlexBox>

          <LikingTourPlace
            places={mypage.basket_data ? mypage.basket_data.items : []}
          />
          <ClickedTourPlace
            places={mypage.search_data ? mypage.search_data.items : []}
          />
        </ResponsiveBlock>
      </PC>

      <Mobile>
        <Box>
          <ProfileWrapperArranger>
            <ProfileWrapper>
              {IconLib.getImgIcon(profile, 55, 55)}
            </ProfileWrapper>
            <VerticalMargin margin="30px" />
            <ProfileName>{`${nickname}님`}</ProfileName>
          </ProfileWrapperArranger>

          <VerticalMargin margin="50px" />
          <Divider />
          <VerticalMargin margin="50px" />

          <SmallName>닉네임</SmallName>
          <Input
            placeholder="닉네임을 10자 이내로 입력해주세요."
            name="nickname"
            value={mypage.nickname}
            onChange={mypage.onChangeInput}
          />

          <SmallName>아이디</SmallName>
          <Input
            placeholder="아이디를 입력해주세요."
            name="id"
            value={mypage.id}
            onChange={mypage.onChangeInput}
          />

          <SmallName>비밀번호</SmallName>
          <Input
            placeholder="비밀번호를 8자 이상 입력해주세요."
            type="password"
            name="password"
            value={mypage.password}
            onChange={mypage.onChangeInput}
          />

          <VerticalMargin margin="50px" />
          <Center>
            <StyledButton onClick={mypage.newInfoRequest}>
              수정하기
            </StyledButton>
          </Center>
        </Box>

        <VerticalMargin margin="70px" />
        <SmallMenu>커플 등록하기</SmallMenu>
        <Box>
          <Center>
            <CoupleInputBanner>
              <Strong>상대방</Strong>의 <Strong>아이디</Strong>를
              <br />
              입력해주세요
            </CoupleInputBanner>
          </Center>
          <Divider />
          <VerticalMargin margin="50px" />

          <SmallName>상대방 아이디</SmallName>
          <Input
            placeholder="아이디를 입력해주세요."
            name="targetID"
            value={signUpdata.targetID}
            onChange={signUpdata.onChangeInput}
          />

          <ExplainCouple>
            서로의 해시태그를 분석하여 최적화된 여행지를 알려드리기 위해
            상대방의 아이디가 필요합니다. 필요로 하지 않으실 경우 건너뛸 수
            있습니다.
          </ExplainCouple>

          <VerticalMargin margin="50px" />
          <Center>
            <div>
              <StyledButton
                onClick={async () => {
                  await signUpdata.candidateRequest();
                  toggleCoupleModal();
                }}
              >
                연결하기
              </StyledButton>
              <VerticalMargin margin="20px" />
              <WhiteButton
                onClick={() => {
                  if (window.confirm('연결을 정말로 해제하시겠습니까?')) {
                    alert('연결을 해제하였습니다.');
                    refuseConnect();
                  }
                }}
              >
                연결해제
              </WhiteButton>
            </div>
          </Center>
        </Box>

        <div>
          <LikingTourPlace
            places={mypage.basket_data ? mypage.basket_data.items : []}
          />
        </div>

        <div>
          <ClickedTourPlace
            places={mypage.search_data ? mypage.search_data.items : []}
          />
        </div>
        <VerticalMargin margin="200px" />
      </Mobile>
    </div>
  );
}
