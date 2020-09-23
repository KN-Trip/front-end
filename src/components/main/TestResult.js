import React, { useEffect } from 'react';
import styled from 'styled-components';
import TestResultHashTagList from './TestResultHashTagList';
import Responsive from '../common/Responsive';
import TestResultPlaceList from './TestResultPlaceList';
import Divider from '../common/Divider';
import PlaceItem from '../common/PlaceItem';

import useTrip from '../../hooks/useTrip';

import { Skeleton } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: '43px', color: '#f85c5c', marginBottom: '24px' }}
    spin
  />
);

const FakeDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 600;

  width: 100vw;
  height: 100vh;

  background-color: rgba(255, 255, 255, 1);
`;

const FillContent = styled.div`
  width: 100vw;
  height: 70vh;
`;

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
  margin-top: 188px;
`;

const ResultText = styled.div`
  margin-bottom: 70px;

  font-family: 'Godo', sans-serif;

  @media (max-width: 1024px) {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 26px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: -1.56px;
    text-align: left;
    color: #173147;
  }
`;

const TextOne = styled.span`
  display: block;

  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.06;
  letter-spacing: -1.28px;
  text-align: left;
  color: #173147;
`;
const TextTwo = styled.span`
  display: block;
  font-size: 42px;
  letter-spacing: -1.68px;
  color: #173147;
`;

const StrongWord = styled.strong`
  font-weight: bold;
  color: black;
`;

const BlankDiv = styled.div`
  width: 100vw;
  height: 70px;
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;

  @media (min-width: 1025px) {
    width: 200px;
    margin-left: auto;
  }
`;

const FilterItem = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;

const FilterDiv = styled.div`
  font-weight: ${(props) => (props.checked ? 700 : 500)};
  color: ${(props) => props.checked && '#f85c5c'};
`;

const getHashTags = ({ area, category }) => {
  const areaNames = area.map((v) => v.area_name);
  const categoryNames = category.map((v) => v.category_name);
  return [...areaNames, ...categoryNames];
};

function TestResult() {
  const tripinfo = useTrip();

  useEffect(() => {
    tripinfo.tripInfoRequest();
    tripinfo.getTest();
  }, []);

  if (tripinfo.GET_TEST_loading || tripinfo.tripinfo_loading) {
    return (
      <>
        <FakeDisplay>
          <Spin
            size="large"
            indicator={antIcon}
            style={{ color: '#f85c5c', fontSize: '19px', fontWeight: '700' }}
          />
        </FakeDisplay>
        <FillContent />
      </>
    );
  }

  return (
    <>
      {tripinfo.tripinfo_data && tripinfo.GET_TEST_data && (
        <>
          <PC>
            <Wrapper>
              <Responsive>
                <ResultText>
                  <TextOne>서로의 해시태그를 분석한 결과!</TextOne>
                  <TextTwo>
                    <StrongWord>{`총 ${tripinfo.tripinfo_data.totalCount}개`}</StrongWord>
                    의 <StrongWord>장소</StrongWord>를
                    <StrongWord> 발견했습니다!</StrongWord>
                  </TextTwo>
                </ResultText>
                <TestResultHashTagList
                  hashTags={getHashTags(tripinfo.GET_TEST_data)}
                />
                <FilterWrapper>
                  <FilterDiv
                    checked={tripinfo.filterNum === 0}
                    onClick={() => {
                      tripinfo.setFilter(0);
                      tripinfo.tripInfoRequest(0);
                    }}
                  >
                    조회순
                  </FilterDiv>
                  <FilterItem>|</FilterItem>
                  <FilterDiv
                    checked={tripinfo.filterNum === 1}
                    onClick={() => {
                      tripinfo.setFilter(1);
                      tripinfo.tripInfoRequest(1);
                    }}
                  >
                    인기순
                  </FilterDiv>
                  <FilterItem>|</FilterItem>
                  <FilterDiv
                    checked={tripinfo.filterNum === 2}
                    onClick={() => {
                      tripinfo.setFilter(2);
                      tripinfo.tripInfoRequest(2);
                    }}
                  >
                    제목순
                  </FilterDiv>
                </FilterWrapper>
              </Responsive>
              <BlankDiv />
              {tripinfo.tripinfo_loading ? (
                <Responsive>
                  <Skeleton active />
                </Responsive>
              ) : (
                <TestResultPlaceList places={tripinfo.tripinfo_data.items} />
              )}
            </Wrapper>
          </PC>

          <Mobile>
            <ResultText>
              해시태그를 분석한 결과!
              <br />
              {`총 ${tripinfo.tripinfo_data.totalCount}개의 장소를`}
              <br />
              발견했습니다!
            </ResultText>
            <TestResultHashTagList
              hashTags={getHashTags(tripinfo.GET_TEST_data)}
            />
            <VerticalMargin margin="50px" />
            <Divider />
            <VerticalMargin margin="30px" />
            <FilterWrapper>
              <div>{`총 ${tripinfo.tripinfo_data.totalCount}개`}</div>
              <FilterWrapper>
                <FilterDiv
                  checked={tripinfo.filterNum === 0}
                  onClick={() => {
                    tripinfo.setFilter(0);
                    tripinfo.tripInfoRequest(0);
                  }}
                >
                  조회순
                </FilterDiv>
                <FilterItem>|</FilterItem>
                <FilterDiv
                  checked={tripinfo.filterNum === 1}
                  onClick={() => {
                    tripinfo.setFilter(1);
                    tripinfo.tripInfoRequest(1);
                  }}
                >
                  인기순
                </FilterDiv>
                <FilterItem>|</FilterItem>
                <FilterDiv
                  checked={tripinfo.filterNum === 2}
                  onClick={() => {
                    tripinfo.setFilter(2);
                    tripinfo.tripInfoRequest(2);
                  }}
                >
                  제목순
                </FilterDiv>
              </FilterWrapper>
            </FilterWrapper>
            <VerticalMargin margin="30px" />

            {tripinfo.tripinfo_loading ? (
              <Skeleton active />
            ) : (
              <TestResultPlaceList places={tripinfo.tripinfo_data.items} />
            )}
            <VerticalMargin margin="53px" />
          </Mobile>
        </>
      )}
    </>
  );
}

export default TestResult;
