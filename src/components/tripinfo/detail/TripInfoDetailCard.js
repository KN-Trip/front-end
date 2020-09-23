import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as IconLib from '../../../lib/icon';

import infoIco from '../../../assets/info-ico.png';
import timeIco from '../../../assets/time-ico.png';
import calendarIco from '../../../assets/calendar-ico.png';
import moneyIco from '../../../assets/money-ico.png';
import loveIco from '../../../assets/love-fill.png';
import shareIco from '../../../assets/share-fill.png';
import loveOKIco from '../../../assets/love-ok-ico.png';

import parkIco from '../../../assets/parking-ico.png';
import petIco from '../../../assets/pet-ico.png';
import childCarIco from '../../../assets/childCar-ico.png';

import dummy from '../../../assets/dummy_img_2.jpg';
import marker from '../../../assets/marker.png';
import Divider from '../../common/Divider';
import KakaoMap from './KakaoMap';
import { English } from '../../common/Font';
import useTrip from '../../../hooks/useTrip';
import { useLocation } from 'react-router-dom';

const Mobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
    padding: 0 30px;

    box-sizing: block;
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
const Wrapper = styled.div`
  padding: 50px 70px;

  width: 1024px;
  margin: 183px auto;

  border-radius: 30px;
  box-shadow: 0 2px 50px 0 rgba(22, 27, 96, 0.1);
  background-color: #ffffff;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 30px 27px;
    margin: 100px auto;
  }
`;

const MainPicture = styled.img`
  display: block;
  src: ${(props) => props.src};

  margin-bottom: 50px;
  width: 884px;
  height: 500px;

  border-radius: 30px;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
    width: 100%;
    height: 160px;
  }
`;

const EnglishName = styled.h3`
  display: block;

  margin-bottom: 25px;

  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.67;
  letter-spacing: normal;
  text-align: left;
  color: #757575;

  @media (max-width: 1024px) {
    margin-bottom: 12px;

    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: normal;
    text-align: left;
    color: #757575;
  }
`;

const KoreanName = styled.h2`
  display: block;

  font-family: 'Godo', sans-serif;
  font-size: 42px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -2.52px;
  text-align: left;
  color: #173147;

  @media (max-width: 1024px) {
    font-size: 24px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -1.44px;
    text-align: left;
    color: #173147;
  }
`;

const SpaceBetweenBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-top: 12px;
    margin-bottom: 34px;
  }
`;

const ImageIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`;

const Address = styled.h3`
  display: block;

  margin-left: 6px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.75;
  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;

  @media (max-width: 1024px) {
    line-height: 0;
  }
`;

const Desc = styled.p`
  display: block;

  margin-top: 50px;
  margin-bottom: 50px;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: -0.64px;
  text-align: left;
  color: #424242;

  @media (max-width: 1024px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.h2`
  display: block;

  margin-bottom: 30px;

  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.84px;
  text-align: left;
  color: #173147;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const MarginBlank = styled.div`
  margin-top: ${(props) => props.margin};
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftBox = styled.div``;
const RightBox = styled.div``;
const ColorBox = styled.div`
  padding: 40px 50px 30px 50px;
  width: 578px;
  height: 429px;
  border-radius: 30px;
  background-color: #f5f5f5;

  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 30px 19px;
  }
`;

const StyledH3 = styled.h3`
  display: block;
  font-size: 16px;

  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;

  line-height: 1.3;
`;

const BoldStyledH3 = styled(StyledH3)`
  font-weight: 900;
`;

const MarginLeft20Div = styled.div`
  margin-left: 20px;
`;

const MarginLeftDiv = styled.div`
  margin-left: ${(props) => props.margin};
`;

const MarginRight40Div = styled.div`
  margin-right: 40px;
`;

const BoxLabelStyledH3 = styled(StyledH3)`
  font-weight: bold;
`;

const MarginBottom13StyledH3 = styled(StyledH3)`
  margin-bottom: 13px;
`;

const MarginStyledH3 = styled(StyledH3)`
  margin-bottom: 147px;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;

  .textarea {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;

const RightFlexDiv = styled(FlexDiv)`
  margin-left: auto;
`;

const UnorderedFlexDiv = styled.div`
  display: flex;
`;

const MapWrapper = styled.div`
  height: 420px;
  border-radius: 30px;

  @media (max-width: 1024px) {
    height: 160px;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const InputForClipBoard = styled.textarea`
  display: none;
`;

export default function Tripinfodetailcard({ tripinfo, id }) {
  const obj = {
    engName: 'Seoul Museum Of Art',
    korName: '서울 시립 북서울 미술관',
    address: '서울특별시 노원구',
    description: `서울특별시 노원구 중계동에 위치한 서울 시립 북서울 미술관은 지상 3층 / 지하 3층의 구조로 되어 있다. 지상 1,2층에 총 4개의
    대형 전시실이 마련되어있어 연중 기획전시가 개최 되고, 지하 1층에 어린이 갤러리에서는 어린이들을 위한 상설전이 이루어진다.
    또한 시민의 특성과 요구를 반영한 맞춤형 교육 프로그램과 다양한 문화예술 프로그램을 실시하여 관객에게 복합적인 문화예술
    경험의 기회를 제공한다.`,
    descAddress: '서울특별시 노원구 동일로 1238 (중계동)',
    facilities: ['주차 가능', '동물 동반 불가능', '유모차 대여 가능'],
    contact: '02-123-4567',
    weeksday: '10:00~20:00',
    summerWeekendAndHoliday: '10:00~19:00',
    winterWeekendAndHoliday: '10:00~18:00',
    breakDay: '매주 월요일, 1 / 1',
    fee: '무료',
    playTime: '약 2~3시간',
  };

  const facilitiesIcons = [parkIco, petIco, childCarIco];
  const clipBoardInput = useRef(null);
  const PCBoard = useRef(null);

  const [like, setLike] = useState(false);
  return (
    <>
      <>
        <PC>
          <Wrapper>
            <MainPicture
              src={tripinfo.tripinfo_detail_data.common.firstimage}
            />

            <MarginBlank margin="30px" />
            <SpaceBetweenBlock>
              <KoreanName>
                {tripinfo.tripinfo_detail_data.common.title}
              </KoreanName>
              <FlexDiv>
                <IconWrapper
                  onClick={() => {
                    setLike(!like);
                    tripinfo.postPlaceToBasketRequest(id);
                  }}
                >
                  {like
                    ? IconLib.getImgIcon(loveOKIco, 24, 24)
                    : IconLib.getImgIcon(loveIco, 24, 24)}
                </IconWrapper>
                <MarginLeftDiv margin="30px" />
                {document.queryCommandSupported('copy') && (
                  <IconWrapper
                    onClick={() => {
                      console.log('hi');
                      PCBoard.current.select();
                      document.execCommand('copy');
                      alert('클립보드에 복사되었습니다.');
                    }}
                  >
                    {IconLib.getImgIcon(shareIco, 24, 24)}
                  </IconWrapper>
                )}

                <textarea
                  className="textarea"
                  value={window.location.href}
                  ref={PCBoard}
                />
              </FlexDiv>
            </SpaceBetweenBlock>

            <ImgWrapper>
              <ImageIcon src={marker} />
              <Address>{tripinfo.tripinfo_detail_data.common.area}</Address>
            </ImgWrapper>

            <Divider />

            <Desc>{tripinfo.tripinfo_detail_data.common.introStr}</Desc>
            <Divider />

            <MarginBlank margin={'50px'} />

            <InfoSection>
              <LeftBox>
                <div>
                  <SubTitle>기본 정보</SubTitle>
                  <strong>
                    <MarginBottom13StyledH3>주소</MarginBottom13StyledH3>
                  </strong>
                  <MarginStyledH3>
                    {tripinfo.tripinfo_detail_data.common.address}
                  </MarginStyledH3>
                </div>

                <div>
                  <SubTitle>편의 시설</SubTitle>
                  {Object.values(
                    tripinfo.tripinfo_detail_data.intro.facility
                  ).map((v, idx) => (
                    <>
                      <UnorderedFlexDiv>
                        <div>
                          {IconLib.getImgIcon(facilitiesIcons[idx], 24, 24)}
                        </div>
                        <MarginLeftDiv margin="12px" />
                        <StyledH3>{v}</StyledH3>
                      </UnorderedFlexDiv>
                      <MarginBlank margin="23px" />
                    </>
                  ))}
                </div>
              </LeftBox>

              <RightBox>
                <SubTitle>
                  <MarginLeftDiv margin={'38px'}>이용 안내</MarginLeftDiv>
                </SubTitle>
                <ColorBox>
                  <div>
                    <FlexDiv>
                      <div>{IconLib.getImgIcon(infoIco, 24, 24)}</div>
                      <MarginLeftDiv margin="10px" />
                      <BoxLabelStyledH3>문의 및 안내</BoxLabelStyledH3>
                      <MarginRight40Div />
                      <StyledH3>
                        {tripinfo.tripinfo_detail_data.intro.use.key1.value}
                      </StyledH3>
                    </FlexDiv>
                    <MarginBlank margin={'20px'} />
                  </div>
                  <Divider />

                  <div>
                    <MarginBlank margin={'20px'} />
                    <UnorderedFlexDiv>
                      <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
                      <MarginLeftDiv margin="10px" />
                      <BoxLabelStyledH3>이용시간</BoxLabelStyledH3>
                      <MarginLeftDiv margin="57px" />

                      <div>
                        <BoldStyledH3>평일</BoldStyledH3>
                        <MarginBlank margin={'20px'} />
                        <BoldStyledH3>주말, 공휴일</BoldStyledH3>
                      </div>

                      <MarginLeftDiv margin={'30px'} />
                      <div>
                        <StyledH3>{obj.weeksday}</StyledH3>
                        <MarginBlank margin={'20px'} />
                        <StyledH3>{`하절기(3 ~ 10월) : ${obj.summerWeekendAndHoliday}`}</StyledH3>
                        <MarginBlank margin={'20px'} />
                        <StyledH3>{`동절기(11 ~ 2월) : ${obj.winterWeekendAndHoliday}`}</StyledH3>
                      </div>
                    </UnorderedFlexDiv>
                  </div>

                  <MarginBlank margin={'20px'} />
                  <Divider />
                  <MarginBlank margin={'20px'} />
                  <div>
                    <FlexDiv>
                      <div>{IconLib.getImgIcon(calendarIco, 24, 24)}</div>
                      <MarginLeftDiv margin="10px" />
                      <BoxLabelStyledH3>쉬는 날</BoxLabelStyledH3>
                      <MarginLeftDiv margin="71px" />
                      <StyledH3>{obj.breakDay}</StyledH3>
                    </FlexDiv>
                  </div>

                  <MarginBlank margin={'20px'} />
                  <Divider />
                  <MarginBlank margin={'20px'} />
                  <div>
                    <FlexDiv>
                      <div>{IconLib.getImgIcon(moneyIco, 24, 24)}</div>
                      <MarginLeftDiv margin="10px" />
                      <BoxLabelStyledH3>이용 요금</BoxLabelStyledH3>
                      <MarginLeftDiv margin="57px" />
                      <StyledH3>{obj.fee}</StyledH3>
                    </FlexDiv>
                  </div>

                  <MarginBlank margin={'20px'} />
                  <Divider />
                  <MarginBlank margin={'20px'} />
                  <div>
                    <FlexDiv>
                      <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
                      <MarginLeftDiv margin="10px" />
                      <BoxLabelStyledH3>관람 소요 시간</BoxLabelStyledH3>
                      <MarginLeftDiv margin="26px" />
                      <StyledH3>{obj.playTime}</StyledH3>
                    </FlexDiv>
                  </div>
                </ColorBox>
              </RightBox>
            </InfoSection>
            <MarginBlank margin="50px" />
            <SubTitle>위치</SubTitle>
            <MapWrapper>
              <KakaoMap
                locationX={tripinfo.tripinfo_detail_data.common.mapx}
                locationY={tripinfo.tripinfo_detail_data.common.mapy}
              />
            </MapWrapper>
          </Wrapper>
        </PC>

        <Mobile>
          <Wrapper>
            <MainPicture
              src={tripinfo.tripinfo_detail_data.common.firstimage}
            />

            <FlexDiv>
              <KoreanName>
                {tripinfo.tripinfo_detail_data.common.title}
              </KoreanName>
              <RightFlexDiv>
                <IconWrapper
                  onClick={() => {
                    setLike(!like);
                    tripinfo.postPlaceToBasketRequest(id);
                  }}
                >
                  {like
                    ? IconLib.getImgIcon(loveOKIco, 24, 24)
                    : IconLib.getImgIcon(loveIco, 24, 24)}
                </IconWrapper>
                <MarginLeftDiv margin="30px" />
                {document.queryCommandSupported('copy') && (
                  <IconWrapper
                    onClick={() => {
                      console.log('hi');
                      clipBoardInput.current.select();
                      document.execCommand('copy');
                      alert('클립보드에 복사되었습니다.');
                    }}
                  >
                    {IconLib.getImgIcon(shareIco, 24, 24)}
                  </IconWrapper>
                )}
              </RightFlexDiv>
              <textarea
                className="textarea"
                value={window.location.href}
                ref={clipBoardInput}
              />
            </FlexDiv>
            <ImgWrapper>
              <ImageIcon src={marker} />
              <Address>{tripinfo.tripinfo_detail_data.common.area}</Address>
            </ImgWrapper>
            <Divider />
            <MarginBlank margin="30px" />
            <Desc>{tripinfo.tripinfo_detail_data.common.introStr}</Desc>
            <Divider />
            <MarginBlank margin="30px" />
            <div>
              <SubTitle>기본 정보</SubTitle>
              <strong>
                <MarginBottom13StyledH3>주소</MarginBottom13StyledH3>
              </strong>
              <StyledH3>
                {tripinfo.tripinfo_detail_data.common.address}
              </StyledH3>
            </div>
            <MarginBlank margin="50px" />
            <div>
              <SubTitle>편의 시설</SubTitle>
              {obj.facilities.map((v, idx) => (
                <>
                  <UnorderedFlexDiv>
                    <div>
                      {IconLib.getImgIcon(facilitiesIcons[idx], 24, 24)}
                    </div>
                    <MarginLeftDiv margin="12px" />
                    <StyledH3>{v}</StyledH3>
                  </UnorderedFlexDiv>
                  <MarginBlank margin="23px" />
                </>
              ))}
            </div>
            <MarginBlank margin="50px" />
            <SubTitle>이용 안내</SubTitle>
            <ColorBox>
              <FlexDiv>
                <div>{IconLib.getImgIcon(infoIco, 24, 24)}</div>
                <MarginLeftDiv margin="10px" />
                <BoxLabelStyledH3>문의 및 안내</BoxLabelStyledH3>
              </FlexDiv>
              <MarginBlank margin="8px" />
              <FlexDiv>
                <MarginLeftDiv margin="35px" />
                <StyledH3>{obj.contact}</StyledH3>
              </FlexDiv>

              <MarginBlank margin="20px" />
              <Divider />
              <MarginBlank margin="20px" />

              <div>
                <FlexDiv>
                  <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
                  <MarginLeftDiv margin="10px" />
                  <BoxLabelStyledH3>이용시간</BoxLabelStyledH3>
                </FlexDiv>
                <MarginBlank margin="16px" />
                <MarginLeftDiv margin="36px">
                  <StyledH3>평일</StyledH3>

                  <MarginBlank margin={'20px'} />
                  <StyledH3>{obj.weeksday}</StyledH3>
                  <MarginBlank margin="30px" />

                  <StyledH3>주말, 공휴일</StyledH3>

                  <MarginBlank margin="16px" />
                  <div>
                    <StyledH3>{`하절기(3 ~ 10월) : ${obj.summerWeekendAndHoliday}`}</StyledH3>
                    <MarginBlank margin={'16px'} />
                    <StyledH3>{`동절기(11 ~ 2월) : ${obj.winterWeekendAndHoliday}`}</StyledH3>
                  </div>
                </MarginLeftDiv>
              </div>

              <MarginBlank margin="20px" />
              <Divider />
              <MarginBlank margin="20px" />

              <FlexDiv>
                <div>{IconLib.getImgIcon(calendarIco, 24, 24)}</div>
                <MarginLeftDiv margin="10px" />
                <BoxLabelStyledH3>쉬는 날</BoxLabelStyledH3>
              </FlexDiv>
              <MarginBlank margin="8px" />
              <FlexDiv>
                <MarginLeftDiv margin="35px" />
                <StyledH3>{obj.breakDay}</StyledH3>
              </FlexDiv>

              <MarginBlank margin="20px" />
              <Divider />
              <MarginBlank margin="20px" />

              <FlexDiv>
                <div>{IconLib.getImgIcon(moneyIco, 24, 24)}</div>
                <MarginLeftDiv margin="10px" />
                <BoxLabelStyledH3>이용 요금</BoxLabelStyledH3>
              </FlexDiv>
              <MarginBlank margin="8px" />
              <FlexDiv>
                <MarginLeftDiv margin="35px" />
                <StyledH3>{obj.fee}</StyledH3>
              </FlexDiv>

              <MarginBlank margin="20px" />
              <Divider />
              <MarginBlank margin="20px" />

              <FlexDiv>
                <div>{IconLib.getImgIcon(timeIco, 24, 24)}</div>
                <MarginLeftDiv margin="10px" />
                <BoxLabelStyledH3>관람 소요 시간</BoxLabelStyledH3>
              </FlexDiv>
              <MarginBlank margin="8px" />
              <FlexDiv>
                <MarginLeftDiv margin="35px" />
                <StyledH3>{obj.playTime}</StyledH3>
              </FlexDiv>
            </ColorBox>

            <MarginBlank margin="50px" />
            <SubTitle>위치</SubTitle>
            <MarginBlank margin="20px" />

            <MapWrapper>
              <KakaoMap
                locationX={tripinfo.tripinfo_detail_data.common.mapx}
                locationY={tripinfo.tripinfo_detail_data.common.mapy}
              />
            </MapWrapper>
          </Wrapper>
        </Mobile>
      </>
    </>
  );
}
