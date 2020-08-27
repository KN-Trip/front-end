import React, { useEffect, useRef } from "react";

const { kakao, innerHeight } = window;

const mapStyle = {
  width: "100%",
  height: "100%",

  borderRadius: "30px",
};

function KakaoMap() {
  const mapContainer = useRef();
  useEffect(() => {
    kakao.maps.load(() => {
      let el = mapContainer.current;
      let map = new kakao.maps.Map(el, {
        center: new kakao.maps.LatLng(37.551389, 127.074111),
      });

      let markerPosition = new kakao.maps.LatLng(37.551389, 127.074111);

      let markers = [];

      // 마커를 생성합니다
      markers.push(new kakao.maps.Marker({ position: markerPosition }));

      // 마커가 지도 위에 표시되도록 설정합니다
      markers.map((marker) => marker.setMap(map));
    });
  }, []);

  return <div id="map" style={mapStyle} ref={mapContainer}></div>;
}
export default KakaoMap;
