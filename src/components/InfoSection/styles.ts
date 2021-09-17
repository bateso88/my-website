import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightTheme }) => (lightTheme ? "#f9f9f9" : "#0E0707")};

  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const InfoWrapper = styled.div`
  /* display: grid; */
  z-index: 1;
  /* height: 860px; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 24px;
  justify-content: center;
`;

export const InfoTitle = styled.h1`
  color: ${({ lightTheme }) => (lightTheme ? "#f25757" : "#76c55b")};
  text-align: center;
  margin: 0 0 20px 0;
`;
