import React from "react";
import * as S from "./style";

const Create = () => {
  return (
    <S.CreateWrapper>
      <S.CreateLeftWrapper>
        <S.CreateBox>
          <S.CreateBoxTitle>일기장 생성</S.CreateBoxTitle>
          <S.CreateBoxFlexDiv>
            <S.CreateBoxInput placeholder="일기장 이름" disabled />
            <S.CreateBoxButton disabled>확인</S.CreateBoxButton>
          </S.CreateBoxFlexDiv>
        </S.CreateBox>
      </S.CreateLeftWrapper>
      <S.CreateRightWrapper>
        <S.CreateSlogan>다른 것 하나 필요없이</S.CreateSlogan>
        <S.CreateTitle>이름만으로 생성 가능</S.CreateTitle>
        <S.CreateExplanation>
          간단해진 생성 방식으로 빠르게 교환일기를 만들 수 있습니다.
        </S.CreateExplanation>
      </S.CreateRightWrapper>
    </S.CreateWrapper>
  );
};

export default Create;
