import styled from "styled-components";

export const ShareWrapper = styled.div`
  width: 100%;
  height: 722px;
  background-color: #ffffff;
  display: flex;
`;

export const ShareLeftWrapper = styled.div`
  width: 45%;
  height: 722px;
  display: flex;
`;

export const ShareWriteDiv = styled.div`
  width: 550px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 250px;
  margin-left: 100px;
`;

export const ShareSlogan = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const ShareTitle = styled.h1`
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ShareExplanation = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #a1a1a1;
`;

export const ShareRightWrapper = styled.div`
  width: 55%;
  height: 722px;
`;

export const ShareNumberBox = styled.div`
  width: 450px;
  height: 300px;
  border: 1px solid #acacac;
  margin-left: 50px;
  margin-top: 75px;
  font-size: 35px;
  text-align: center;
  box-shadow: 6px 8px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ShareNumberTitle = styled.h3`
  margin-top: 60px;
  font-size: 35px;
`;

export const ShareCodeNumber = styled.h1`
  margin: 0;
  font-size: 60px;
`;

export const ShareInputBox = styled.div`
  width: 550px;
  height: 270px;
  border: 1px solid #acacac;
  position: relative;
  top: -75px;
  left: 200px;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 6px 8px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ShareInputCodeTitle = styled.h2`
  margin: 0;
  font-size: 45px;
`;

export const ShareInputButtonDiv = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const ShareInputCodeInput = styled.input`
  width: 350px;
  height: 40px;
  margin-right: 30px;
  border: none;
  border-radius: 10px;
  background-color: #f3f3f3;
  &::placeholder {
    font-size: 15px;
    font-weight: bold;
    color: #c6c6c6;
    padding-left: 10px;
  }
`;

export const ShareInputButton = styled.button`
  width: 70px;
  height: 42px;
  border: none;
  border-radius: 10px;
  background-color: #8b8b8b;
  color: #ffffff;
`;
