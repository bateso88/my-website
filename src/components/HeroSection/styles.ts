import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.div`
  background-image: url("../images/IMG_2289.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: contain;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: -100px;
`;

export const HeroSubtitle = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const HeroButtonContainer = styled.p`
  margin-top: 32px;
`;

export const HeroButton = styled(LinkS)`
  background-color: transparent;
  color: #fff;
  padding: 12px 26px;
  font-size: 20px;
  border: 1px solid black;
  transition: all 0.3s ease-out;
`;

// .hero-container .btn {
//   margin: 3px;
// }

// .fa-play-circle {
//   margin-left: 4px;
// }

// @media screen and (max-width: 960px) {
//   .hero-container > h1 {
//     font-size: 70px;
//     margin-top: -150px;
//   }
// }

// @media screen and (max-width: 768px) {
//   .hero-container > h1 {
//     font-size: 50px;
//     margin-top: -150px;
//   }
//   .hero-container > p {
//     font-size: 30px;
//   }

//   .btn-mobile {
//     display: block;
//     text-decoration: none;
//   }

//   .btn {
//     width: 100%;
//   }

// }
