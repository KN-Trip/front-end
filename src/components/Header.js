import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Responsive from "./common/Responsive";
import Logo from "./common/Logo";

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
`;
const NavItemActiveStyle = {
  fontWeight: 900,
  color: "#f85c5c",
  textDecoration: "none",
};

function Header() {
  return (
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

            <StyleNavLink exact to="/mypage" activeStyle={NavItemActiveStyle}>
              <MenuItem>마이페이지 </MenuItem>
            </StyleNavLink>

            <StyleNavLink exact to="/login" activeStyle={NavItemActiveStyle}>
              <MenuItem>로그인 / 회원가입</MenuItem>
            </StyleNavLink>
          </MenuList>
        </HeaderContent>
      </Responsive>
    </HeaderWrapper>
  );
}

export default Header;
