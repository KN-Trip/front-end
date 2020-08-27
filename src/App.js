import React from "react";

import { createGlobalStyle } from "styled-components";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import { Route } from "react-router-dom";
import TripInfoPage from "./pages/TripInfoPage";
import ShortPathPage from "./pages/ShortPathPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import Tripinfodetailpage from "./pages/TripInfoDetailPage";

const GlobalStyle = createGlobalStyle`
  font-family: 'NanumSquare', sans-serif !important; 
  @font-face { font-family: 'Godo'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff') format('woff'); }
  @font-face { font-family: 'Godo'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff'); }
 
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/tripinfo" component={TripInfoPage} />
      <Route exact path="/tripinfo/:id" component={Tripinfodetailpage} />
      <Route exact path="/shortpath" component={ShortPathPage} />
      <Route exact path="/mypage" component={MyPage} />
    </>
  );
}

export default App;
