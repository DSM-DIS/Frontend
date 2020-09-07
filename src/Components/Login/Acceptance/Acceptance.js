import React from "react";
import * as S from "./style";
import { MdAdd } from "react-icons/md";

const Acceptance = () => {
  return (
    <S.AcceptanceWrapper>
      <S.AcceptanceLeftWrapper>
        <S.AcceptanceWriteDiv>
          <S.AcceptanceSlogan>빠르게 찾는 나의 일기장</S.AcceptanceSlogan>
          <S.AcceptanceTitle>간편한 일기 수납 형식</S.AcceptanceTitle>
          <S.AcceptanceExplanation>
            메인 화면에 본인의 일기장을 한눈에 보여주기 때문에
            <br />
            일기장을 추가해도 손쉽게 확인이 가능합니다.
          </S.AcceptanceExplanation>
        </S.AcceptanceWriteDiv>
      </S.AcceptanceLeftWrapper>
      <S.AcceptanceRightWrapper>
        <S.AcceptanceDiaryBox>
          <S.AcceptanceEachDiaryBox>
            <S.AcceptanceCreateDiary>
              <MdAdd size={50} />
            </S.AcceptanceCreateDiary>
            <S.AcceptanceDiaryExplanation>
              일기 생성하기
            </S.AcceptanceDiaryExplanation>
          </S.AcceptanceEachDiaryBox>
          <S.AcceptanceEachDiaryBox>
            <S.AcceptanceDiary>DIARY</S.AcceptanceDiary>
            <S.AcceptanceDiaryExplanation>
              모두의 일기장
            </S.AcceptanceDiaryExplanation>
          </S.AcceptanceEachDiaryBox>
          <S.AcceptanceEachDiaryBox>
            <S.AcceptanceDiary>DIARY</S.AcceptanceDiary>
            <S.AcceptanceDiaryExplanation>
              모두의 일기장
            </S.AcceptanceDiaryExplanation>
          </S.AcceptanceEachDiaryBox>
        </S.AcceptanceDiaryBox>
      </S.AcceptanceRightWrapper>
    </S.AcceptanceWrapper>
  );
};

export default Acceptance;
