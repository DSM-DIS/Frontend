import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogo>DIS</S.HeaderLogo>
      <S.HeaderButtonDiv>
        <S.HeaderLoginButton>sign in</S.HeaderLoginButton>
        <S.HeaderRegisterButton>sign up</S.HeaderRegisterButton>
      </S.HeaderButtonDiv>
    </S.HeaderWrapper>
  );
};

export default Header;
