import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Responsive from "./common/Responsive";
import Logo from "./common/Logo";
import drawerIco from "../assets/drawer.png";
import clearIco from "../assets/clear.png";
import * as IconLib from "../lib/icon";

const MobileHeader = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    display: block;
    box-sizing: border-box;
  }
`;

const PCHeader = styled.div`
  @media (min-width: 1025px) {
    display: block;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// PC View

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 138px;

  border-bottom: 1px solid #e0e0e0;

  font-family: "NanumSquare", sans-serif !important;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

const MenuItem = styled.li`
  margin-left: 40px;

  text-decoration: none;

  list-style: none;
  letter-spacing: -0.64px;

  &:hover {
    font-weight: 900;
    color: #f85c5c;
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
`;

const StyleNavLink = styled(NavLink)`
  font-weight: 700;
  text-decoration: none;
  color: #757575;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
    display: block;
    margin-bottom: 40px;
  }
`;
const NavItemActiveStyle = {
  fontWeight: 900,
  color: "#f85c5c",
  textDecoration: "none",
};

// Mobile View

const MobileHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 37px 0 37px;

  width: 100vw;
  height: 70px;

  border-bottom: 1px solid #bdbdbd;

  box-sizing: border-box;
`;

const NavOnBackground = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  z-index: 30;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.29);

  overflow-y: hidden;
`;

const NavMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 31;

  padding: 23px 37px 0px 50px;
  width: 72vw;
  height: 100vh;
  background-color: #fff;

  box-sizing: border-box;

  animation-name: slidein;
  animation-duration: 0.5s;

  @keyframes slidein {
    from {
      right: -100vw;
    }
    to {
      right: 0;
    }
  }
`;

const ClearIconWrapper = styled.div`
  margin-left: auto;

  width: 24px;
  height: 24px;
`;

const CenterBox = styled.div`
  display: flex;

  height: 100%;
  align-items: center;
`;

function Header() {
  const [nav, toggleNav] = useState(false);
  return (
    <>
      <MobileHeader>
        <MobileHeaderWrapper>
          <Logo width={80} height={24} />
          <div
            onClick={() => {
              toggleNav(!nav);
            }}
          >
            {IconLib.getImgIcon(drawerIco, 24, 24)}
          </div>
        </MobileHeaderWrapper>

        <div>
          {nav && (
            <>
              <NavOnBackground>
                <NavMenu>
                  <ClearIconWrapper
                    onClick={() => {
                      toggleNav(!nav);
                    }}
                  >
                    {IconLib.getImgIcon(clearIco, 24, 24)}
                  </ClearIconWrapper>
                  <CenterBox>
                    <div>
                      <StyleNavLink
                        exact
                        to="/"
                        activeStyle={NavItemActiveStyle}
                      >
                        <MenuItem>소개</MenuItem>
                      </StyleNavLink>

                      <StyleNavLink
                        to="/tripinfo"
                        activeStyle={NavItemActiveStyle}
                      >
                        <MenuItem>여행지 정보</MenuItem>
                      </StyleNavLink>

                      <StyleNavLink
                        exact
                        to="/shortpath"
                        activeStyle={NavItemActiveStyle}
                      >
                        <MenuItem>최단 경로 </MenuItem>
                      </StyleNavLink>

                      <StyleNavLink
                        exact
                        to="/mypage"
                        activeStyle={NavItemActiveStyle}
                      >
                        <MenuItem>마이페이지 </MenuItem>
                      </StyleNavLink>

                      <StyleNavLink
                        exact
                        to="/login"
                        activeStyle={NavItemActiveStyle}
                      >
                        <MenuItem>로그인 / 회원가입</MenuItem>
                      </StyleNavLink>
                    </div>
                  </CenterBox>
                </NavMenu>
              </NavOnBackground>
            </>
          )}
        </div>
      </MobileHeader>

      <PCHeader>
        <HeaderWrapper>
          <Responsive>
            <HeaderContent>
              <Logo width={174} height={60} />
              <MenuList>
                <StyleNavLink exact to="/" activeStyle={NavItemActiveStyle}>
                  <MenuItem>소개</MenuItem>
                </StyleNavLink>

                <StyleNavLink to="/tripinfo" activeStyle={NavItemActiveStyle}>
                  <MenuItem>여행지 정보</MenuItem>
                </StyleNavLink>

                <StyleNavLink
                  exact
                  to="/shortpath"
                  activeStyle={NavItemActiveStyle}
                >
                  <MenuItem>최단 경로 </MenuItem>
                </StyleNavLink>

                <StyleNavLink
                  exact
                  to="/mypage"
                  activeStyle={NavItemActiveStyle}
                >
                  <MenuItem>마이페이지 </MenuItem>
                </StyleNavLink>

                <StyleNavLink
                  exact
                  to="/login"
                  activeStyle={NavItemActiveStyle}
                >
                  <MenuItem>로그인 / 회원가입</MenuItem>
                </StyleNavLink>
              </MenuList>
            </HeaderContent>
          </Responsive>
        </HeaderWrapper>
      </PCHeader>
    </>
  );
}

export default Header;
