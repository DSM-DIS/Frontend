import styled from "styled-components";

export const CreateWrapper = styled.div`
  width: 100%;
  height: 550px;
  background-color: #f8eeee;
  display: flex;
`;

export const CreateLeftWrapper = styled.div`
  width: 50%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CreateBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: #ffffff;
  margin-right: 100px;
  border: 1px solid #b7b4b4;
  border-radius: 20px;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CreateBoxTitle = styled.h1``;

export const CreateBoxFlexDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const CreateBoxInput = styled.input`
  width: 300px;
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

export const CreateBoxButton = styled.button`
  width: 70px;
  height: 42px;
  border: none;
  border-radius: 10px;
  background-color: #8b8b8b;
  color: #ffffff;
`;

export const CreateRightWrapper = styled.div`
  width: 50%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const CreateSlogan = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const CreateTitle = styled.h1`
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const CreateExplanation = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #a1a1a1;
`;
