import React from "react";
import styled from "styled-components";
import Divider from "../common/Divider";

const NavWrapper = styled.nav`
  position: fixed;

  margin-left: 50px;
  padding-top: 67px;
  padding-left: 15px;

  width: 260px;
  height: 392px;

  border-radius: 30px;
  box-shadow: 0 2px 50px 0 rgba(22, 27, 96, 0.1);
  background-color: #ffffff;

  box-sizing: border-box;
`;

const UserName = styled.h3`
  display: block;
  margin-left: 18px;
  margin-bottom: 31px;
  font-size: 20px;
  font-weight: bold;

  letter-spacing: -0.8px;
  text-align: left;
  color: #757575;

  box-sizing: border-box;
`;

const NavItem = styled.li`
  margin-bottom: 30px;
  margin-left: 18px;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.64px;
  text-align: left;
  color: #f85c5c;
`;

const MarginDivider = styled.div`
  margin-bottom: 30px;

  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

function MyPageNav() {
  return (
    <>
      <NavWrapper>
        <UserName>랄랄랄님</UserName>
        <MarginDivider />

        <ul>
          <NavItem>내가 찜한 여행지</NavItem>
          <NavItem>최근 조회한 여행지</NavItem>
        </ul>

        <MarginDivider />

        <ul>
          <NavItem>회원 정보 수정</NavItem>
          <NavItem>커플 등록하기</NavItem>
        </ul>
      </NavWrapper>
    </>
  );
}

export default MyPageNav;
