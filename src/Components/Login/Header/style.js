import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 79px;
  background-color: #ffffff;
  display: flex;
  z-index: 200;
`;

export const HeaderLogo = styled.div`
  width: 100px;
  height: 79px;
  color: #ff9d9d;
  font-size: 50px;
  font-weight: bold;
  padding-left: 20px;
`;

export const HeaderButtonDiv = styled.div`
  width: calc(100% - 120px);
  height: 79px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderLoginButton = styled.button`
  width: 129px;
  height: 49px;
  color: #ff9d9d;
  border: 4px solid #ff9d9d;
  border-radius: 40px;
  background-color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
`;

export const HeaderRegisterButton = styled.button`
  width: 129px;
  height: 49px;
  color: #ff9d9d;
  border: 4px solid #ff9d9d;
  border-radius: 40px;
  background-color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 40px;
`;
