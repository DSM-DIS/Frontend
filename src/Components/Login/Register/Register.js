import React from "react";
import * as S from "./style";

const Register = () => {
  return (
    <S.RegisterWrapper>
      <S.RegisterLeftWrapper>
        <S.RegisterBox>
          <S.RegisterLoginWrapper>
            <S.RegisterLoginMent>ID</S.RegisterLoginMent>
            <S.RegisterLoginInput />
            <S.RegisterLoginMent>password</S.RegisterLoginMent>
            <S.RegisterLoginInput />
            <S.RegisterLoginButton>sign in</S.RegisterLoginButton>
          </S.RegisterLoginWrapper>
          <S.RegisterRegisterButton>sign up</S.RegisterRegisterButton>
        </S.RegisterBox>
      </S.RegisterLeftWrapper>
      <S.RegisterRightWrapper>
        <S.RegisterTitle>
          지금 다른 사람들과
          <br />
          일기를 공유하세요
        </S.RegisterTitle>
        <S.RegisterExplanation>
          다른 사람과 함께 하는 교환일기 서비스
          <br />
          다이스(DIS)와 함께 하세요
        </S.RegisterExplanation>
        <S.RegsiterSignUpButton>가입하기</S.RegsiterSignUpButton>
      </S.RegisterRightWrapper>
    </S.RegisterWrapper>
  );
};

export default Register;
