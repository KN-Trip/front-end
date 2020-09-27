import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Responsive from './common/Responsive';
import Divider from './common/Divider';
import Logo from './common/Logo';
import drawerIco from '../assets/drawer.png';
import clearIco from '../assets/clear.png';

import profileIco from '../assets/profile.png';
import downArrowIco from '../assets/down-arrow-ico.png';
import * as IconLib from '../lib/icon';

import useLogin from '../hooks/useLogin';
import useLogout from '../hooks/useLogout';

import { useHistory } from 'react-router-dom';

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

  font-family: 'NanumSquare', sans-serif !important;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
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

  @media (max-width: 1024px) {
    margin-left: 0;
    font-family: 'NanumSquare', sans-serif !important;
    font-size: 16px;
  }

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
  color: '#f85c5c',
  textDecoration: 'none',
};

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 16px;

  width: 34px;
  height: 34px;

  border-radius: 100%;
  background-color: #f5f5f5;

  cursor: pointer;
`;

const CursorWrapper = styled.div`
  cursor: pointer;
`;

const TotalProfile = styled.div`
  position: relative;
  top: 73px;
  margin-left: 40px;
`;

const ProfileDropDown = styled.div`
  position: relative;
  display: block;

  visibility: ${(props) => (props.open ? 'block' : 'hidden')};

  right: 110px;

  margin-top: 30px;

  padding: 20px;
  width: 184px;

  border-radius: 10px;
  box-shadow: 1px 2px 30px 0 rgba(22, 27, 96, 0.1);
  background-color: #ffffff;

  box-sizing: border-box;
`;

const VerticalMargin = styled.div`
  margin-top: ${(props) => props.margin};
`;

const NickName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;

const LogoutText = styled.span`
  display: block;

  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  letter-spacing: -0.48px;
  text-align: left;
  color: #757575;

  cursor: pointer;
`;

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

  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const MobileProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MobileLogoutText = styled.span`
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.64px;
  text-align: left;
  color: #757575;
`;

const Width100Div = styled.div`
  width: 100%;
`;

const NavContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

function Header() {
  const [nav, toggleNav] = useState(false);
  const history = useHistory();
  const [
    login,
    login_loading,
    login_error,
    loginRequest,
    nickname,
  ] = useLogin(); // 로그인 여부 true false
  const isLoggedIn = login;

  const {
    logout,
    logout_loading,
    logout_error,
    logoutRequest,
    clearLogin,
  } = useLogout();

  const [profile, toggleProfile] = useState(false);
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
                  <NavContentWrapper>
                    <CenterBox>
                      <Width100Div>
                        {isLoggedIn && (
                          <>
                            <MobileProfileWrapper>
                              <ProfileWrapper>
                                <div>
                                  {IconLib.getImgIcon(profileIco, 24, 24)}
                                </div>
                              </ProfileWrapper>
                              <NickName>{nickname}</NickName>
                            </MobileProfileWrapper>
                            <VerticalMargin margin="30px" />
                            <Divider />
                            <VerticalMargin margin="40px" />
                          </>
                        )}
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
                        {isLoggedIn && (
                          <>
                            <Divider />
                            <VerticalMargin margin="40px" />
                            <MobileLogoutText
                              onClick={async () => {
                                if (
                                  window.confirm('정말 로그아웃 하시겠습니까?')
                                ) {
                                  clearLogin();
                                  await logoutRequest();
                                  toggleProfile(!profile);
                                  window.open('http://kntrip.me', '_self');
                                }
                              }}
                            >
                              로그아웃
                            </MobileLogoutText>
                          </>
                        )}

                        {!isLoggedIn && (
                          <>
                            <StyleNavLink
                              exact
                              to="/login"
                              activeStyle={NavItemActiveStyle}
                            >
                              <MenuItem>로그인 / 회원가입</MenuItem>
                            </StyleNavLink>
                          </>
                        )}
                      </Width100Div>
                    </CenterBox>
                  </NavContentWrapper>
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
              <Logo
                width={174}
                height={60}
                onClick={() => {
                  window.open('http://kntrip.me', '_self');
                }}
              />
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

                {!isLoggedIn && (
                  <StyleNavLink
                    exact
                    to="/login"
                    activeStyle={NavItemActiveStyle}
                  >
                    <MenuItem>로그인 / 회원가입</MenuItem>
                  </StyleNavLink>
                )}

                {isLoggedIn && (
                  <TotalProfile>
                    <CenterBox>
                      <ProfileWrapper
                        onClick={() => {
                          toggleProfile(!profile);
                        }}
                      >
                        {IconLib.getImgIcon(profileIco, 24, 24)}
                      </ProfileWrapper>
                      <CursorWrapper
                        onClick={() => {
                          toggleProfile(!profile);
                        }}
                      >
                        {IconLib.getImgIcon(downArrowIco, 24, 24)}
                      </CursorWrapper>
                    </CenterBox>
                    <ProfileDropDown open={profile}>
                      <CenterBox>
                        <ProfileWrapper>
                          <div>{IconLib.getImgIcon(profileIco, 24, 24)}</div>
                        </ProfileWrapper>
                        <NickName>{nickname}</NickName>
                      </CenterBox>
                      <VerticalMargin margin="12px" />
                      <Divider />
                      <VerticalMargin margin="12px" />
                      <LogoutText
                        onClick={async () => {
                          if (window.confirm('정말 로그아웃 하시겠습니까?')) {
                            clearLogin();
                            await logoutRequest();
                            toggleProfile(!profile);

                            window.open('http://kntrip.me', '_self');
                          }
                        }}
                      >
                        로그아웃
                      </LogoutText>
                    </ProfileDropDown>
                  </TotalProfile>
                )}
              </MenuList>
            </HeaderContent>
          </Responsive>
        </HeaderWrapper>
      </PCHeader>
    </>
  );
}

export default Header;
