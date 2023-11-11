import styled from "styled-components";

export const Container = styled.main`
  width: 1140px;
  max-width: 80%;
  margin: 120px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #fff;
`;

export const TitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const SubtitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const EsqueciText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: rgb(229, 224, 68);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CriarText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: rgb(35, 221, 122);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
