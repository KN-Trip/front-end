import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Tripinfodetailcard from '../components/tripinfo/detail/TripInfoDetailCard';
import RecommendPlace from '../components/tripinfo/detail/RecommendPlace';
import HotPlace from '../components/tripinfo/detail/HotPlace';
import CloseHotel from '../components/tripinfo/detail/CloseHotel';
import Footer from '../components/common/Footer';
import { useLocation } from 'react-router-dom';
import useTrip from '../hooks/useTrip';

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
`;

const FillContent = styled.div`
  width: 100vw;
  height: 70vh;
`;

const TotalWrapper = styled.div`
  font-family: 'NanumSquare', sans-serif !important;
`;
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function Tripinfodetailpage() {
  const tripinfo = useTrip();
  const query = useQuery();

  useEffect(() => {
    tripinfo.tripInfoDetailRequest(query.get('id'), query.get('type'));
  }, [query.get('id')]); //

  if (tripinfo.tripinfo_detail_loading) {
    return (
      <>
        <FakeDisplay>
          <Spin
            size="large"
            indicator={antIcon}
            style={{ color: '#f85c5c', fontSize: '19px', fontWeight: '700' }}
          ></Spin>
        </FakeDisplay>
        <FillContent />
      </>
    );
  }

  return (
    tripinfo.tripinfo_detail_data && (
      <TotalWrapper>
        <Header />
        <Tripinfodetailcard tripinfo={tripinfo} id={query.get('id')} />
        <RecommendPlace
          locationX={tripinfo.tripinfo_detail_data.common.mapx}
          locationY={tripinfo.tripinfo_detail_data.common.mapy}
          nowContentId={query.get('id')}
        />
        <HotPlace
          contentId={query.get('id')}
          areaCode={tripinfo.tripinfo_detail_data.common.areaCode}
        />
        <CloseHotel
          contentId={query.get('id')}
          areaCode={tripinfo.tripinfo_detail_data.common.areaCode}
        />
        <Footer />
      </TotalWrapper>
    )
  );
}
