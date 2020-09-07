import React from "react";
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterAdsWrapper>
        <S.FooterAds>
          일기가 쓰고 싶을 땐?
          <br />
          언제나 다이스(DIARY STORY)와 함께!
        </S.FooterAds>
      </S.FooterAdsWrapper>
      <S.FooterPolicyWrapper>
        <S.FooterFunctionsDiv>
          <S.FooterFunctions>고객센터</S.FooterFunctions>
          <S.FooterFunctions>공지사항</S.FooterFunctions>
        </S.FooterFunctionsDiv>
        <S.FooterPolicyDiv>
          <S.FooterPolicy>개인정보처리방침</S.FooterPolicy>
          <S.FooterPolicy>저작권보호정책</S.FooterPolicy>
          <S.FooterPolicy>이용약관</S.FooterPolicy>
        </S.FooterPolicyDiv>
      </S.FooterPolicyWrapper>
      <S.FooterLocationWrapper>
        <S.FooterLocation>
          (34111)대전광역시 유성구 가정북로 76(장동 23-9)
          대덕소프트웨어마이스터고등학교
        </S.FooterLocation>
      </S.FooterLocationWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
