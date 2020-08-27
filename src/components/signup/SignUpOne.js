import React from "react";
import styled from "styled-components";

import CR from "../../assets/radiobutton-checked.png";
import DR from "../../assets/radiobutton-default.png";
import profile from "../../assets/profile.png";

const Wrapper = styled.div`
  width: 100%;
`;
const CautionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FakeBlock = styled.div`
  width: 1px;
`;

const Caution = styled.span`
  display: block;

  margin-left: auto;

  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #000000;
`;

const InputList = styled.ul``;

const InputItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.div`
  margin-right: 10px;

  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: #424242;
`;
const Input = styled.input`
  width: 340px;
  box-sizing: border-box;

  padding: 16px 34px;

  border: 0px;
  border-bottom: 1px solid #e0e0e0;

  outline: none;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioLabel = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 5.5;
  letter-spacing: -0.48px;
  text-align: left;
  color: #757575;
`;

const RadioInput = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 10px;

  background-image: url(${(props) => (props.checked ? CR : DR)});
  background-size: cover;

  &:hover {
    cursor: pointer;
  }
`;

const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 48px;
  border-radius: 24px;

  font-size: 14px;
  font-weight: bold;

  background-color: #f85c5c;
  color: white;

  &:hover {
    background-color: #fd8989;
  }
`;

const FileInputLabel = styled.label`
  width: 93px;
  height: 93px;
  &:hover {
    cursor: pointer;
  }
`;

const FileInputLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;
  background-color: #f5f5f5;

  border-radius: 100%;
`;

const ProfileIcon = styled.img`
  src: ${(props) => props.src};
  display: block;

  width: 55px;
  height: 55px;
`;

const ProfilePlus = styled.div`
  position: relative;
  z-index: 2;
  top: -30px;
  left: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  box-shadow: 0 3px 6px 0 rgba(22, 27, 96, 0.1);

  border-radius: 100%;
  background-color: #ffffff;

  font-size: 20px;
  font-weight: 900;
  color: #bdbdbd;
`;

const ProfileUploadWrapper = styled(InputItem)`
  margin-top: 28px;
`;

const ProfileExplain = styled.div`
  margin-left: 45px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: -0.56px;
  text-align: left;
  color: #757575;
`;

function SignUpOne({ setStep }) {
  return (
    <Wrapper>
      <CautionWrapper>
        <FakeBlock />
        <Caution>* 필수 입력 사항</Caution>
      </CautionWrapper>

      <InputList>
        <InputItem>
          <Label>닉네임 *</Label>
          <Input placeholder="닉네임을 10자이내로 입력해주세요." />
        </InputItem>

        <InputItem>
          <Label>아이디 *</Label>
          <Input placeholder="아이디를 입력해주세요." />
        </InputItem>

        <InputItem>
          <Label>비밀번호 *</Label>
          <Input
            placeholder="비밀번호를 8자 이상 입력해주세요."
            type="password"
          />
        </InputItem>

        <InputItem>
          <Label>비밀번호 재입력*</Label>
          <Input
            placeholder="비밀번호를 8자 이상 입력해주세요."
            type="password"
          />
        </InputItem>

        <ProfileUploadWrapper>
          <Label>프로필 정보 입력</Label>
          <FileInputLabelWrapper>
            <FileInputLabel for="profile_upload">
              <ProfileCircle>
                <ProfileIcon src={profile} />
              </ProfileCircle>

              <ProfilePlus>+</ProfilePlus>
            </FileInputLabel>
            <FileInput
              type="file"
              name="myImage"
              accept="image/x-png,image/gif,image/jpeg"
              id="profile_upload"
            />
            <ProfileExplain>원하시는 프로필을 업로드해주세요.</ProfileExplain>
          </FileInputLabelWrapper>
        </ProfileUploadWrapper>
      </InputList>

      <RadioWrapper>
        <RadioInput checked={false} />
        <RadioLabel>이용약관 및 개인 정보 보호 정책에 동의합니다.</RadioLabel>
      </RadioWrapper>

      <ButtonWrapper>
        <SignUpButton
          onClick={() => {
            setStep(2);
          }}
        >
          회원가입
        </SignUpButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SignUpOne;
