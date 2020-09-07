import React from "react";
import * as S from "./style";

const Share = () => {
  return (
    <S.ShareWrapper>
      <S.ShareLeftWrapper>
        <S.ShareWriteDiv>
          <S.ShareSlogan>나 혼자가 아닌 다른 사람들과!</S.ShareSlogan>
          <S.ShareTitle>
            코드를 사용하여
            <br />
            공유 가능한 일기
          </S.ShareTitle>
          <S.ShareExplanation>
            코드 번호로 언제든 다른 사람과 나의 일기장을
            <br />
            공유할 수 있습니다. 다른 누군가와 함께 일기를 공유해보세요!
          </S.ShareExplanation>
        </S.ShareWriteDiv>
      </S.ShareLeftWrapper>
      <S.ShareRightWrapper>
        <S.ShareNumberBox>
          <S.ShareNumberTitle>코드번호</S.ShareNumberTitle>
          <S.ShareCodeNumber>A486QS2</S.ShareCodeNumber>
        </S.ShareNumberBox>
        <S.ShareInputBox>
          <S.ShareInputCodeTitle>코드입력</S.ShareInputCodeTitle>
          <S.ShareInputButtonDiv>
            <S.ShareInputCodeInput placeholder="ex )  3A48YA" disabled />
            <S.ShareInputButton disabled>확인</S.ShareInputButton>
          </S.ShareInputButtonDiv>
        </S.ShareInputBox>
      </S.ShareRightWrapper>
    </S.ShareWrapper>
  );
};

export default Share;
