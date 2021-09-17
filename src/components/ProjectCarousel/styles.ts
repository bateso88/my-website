import styled from "styled-components";

export const CarouselItem = styled.div`
  height: 400px;
  background: black;
`;

export const CarouselCard = styled.div`
  height: 100%;
  width: 95%;
  margin: 10px auto;
  background: white;
  border-radius: 3px;
  position: relative;
  &:hover {
    transform: scale(1.02) translate(0%, -1%);
    transition: all 0.2s ease-in-out;
  }
`;

export const CarouselCardDescriptionContainer = styled.div`
  position: absolute;
  background: rgb(0, 0, 0, 0.35);
  bottom: 0;
  text-align: left;
  padding: 10px 5px 25px 5px;
`;
