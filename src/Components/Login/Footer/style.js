import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 550px;
  background-color: #eeeeee;
`;

export const FooterAdsWrapper = styled.div`
  width: calc(100% - 100px);
  height: calc(45% - 75px);
  padding-top: 75px;
  padding-left: 100px;
`;

export const FooterAds = styled.h1`
  font-size: 45px;
  color: #5e5e5e;
`;

export const FooterPolicyWrapper = styled.div`
  width: 100%;
  height: calc(35% - 30px);
`;

export const FooterFunctionsDiv = styled.div`
  display: flex;
  padding-left: 100px;
  padding-top: 30px;
`;

export const FooterFunctions = styled.h2`
  margin-left: 10px;
  margin-right: 40px;
  font-size: 25px;
  color: #5e5e5e;
`;

export const FooterPolicyDiv = styled.div`
  display: flex;
  padding-left: 100px;
`;

export const FooterPolicy = styled.p`
  margin: 0;
  margin-right: 40px;
  font-size: 20px;
  color: #5e5e5e;
  font-weight: normal;
`;

export const FooterLocationWrapper = styled.div`
  width: 100%;
  height: 20%;
`;

export const FooterLocation = styled.p`
  margin-left: 100px;
  margin-top: 30px;
  color: #5e5e5e;
  font-weight: normal;
`;
