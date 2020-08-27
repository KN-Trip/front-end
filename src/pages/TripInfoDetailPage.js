import React from "react";
import Header from "../components/Header";
import Tripinfodetailcard from "../components/tripinfo/detail/TripInfoDetailCard";
import RecommendPlace from "../components/tripinfo/detail/RecommendPlace";
import HotPlace from "../components/tripinfo/detail/HotPlace";
import CloseHotel from "../components/tripinfo/detail/CloseHotel";
import Footer from "../components/common/Footer";

export default function Tripinfodetailpage() {
  return (
    <>
      <Header />
      <Tripinfodetailcard />
      <RecommendPlace />
      <HotPlace />
      <CloseHotel />
      <Footer />
    </>
  );
}
