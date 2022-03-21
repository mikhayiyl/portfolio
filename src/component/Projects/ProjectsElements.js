import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyScene = styled.div`
  background-color: #000;
  min-height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 75px;
  perspective: 14em;
  height: auto;
  perspective-origin: 50% calc(50% - 2em);
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    min-height: 900px;
  }

  @media screen and (max-width: 770px) {
    min-height: 750px;
  }
  @media screen and (max-width: 450px) {
    min-height: 780px;
  }
`;
export const SceneBox = styled.div`
  position: relative;
  transform-style: preserve-3d;
  animation: sceneRotate 30s infinite linear;

  @keyframes sceneRotate {
    to {
      transform: rotateY(360deg);
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const FloorContainer = styled.div`
  position: absolute;
  top: 17vh;
  width: 14em;
  height: 14em;
  border-radius: 50%;
  background-image: radial-gradient(#0000, #000 75%),
    repeating-conic-gradient(from 45deg, #e70fb8 0deg 90deg, #fff 90deg 180deg);

  background-size: 100%, 1em 1em;
  transform: translate(-50%, -50%) rotateX(90deg);

  @media screen and (min-width: 1760px) {
    width: 20em;
    height: 18em;
  }
`;
export const Ball = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BallBox = styled.div`
  position: absolute;
  top: 3rem;
`;

export const ProjectTitle = styled.span`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectBtn = styled(Link)`
  position: absolute;
  bottom: 7rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgb(20, 220, 20);
    box-shadow: 10px 4px 20px #fff;
  }

  @media screen and (max-width: 768px) {
    bottom: 5rem;
  }

  @media screen and (max-width: 650px) {
    bottom: 9rem;
  }
  @media screen and (max-width: 450px) {
    bottom: 7rem;
  }
  @media screen and (max-width: 350px) {
    bottom: 11rem;
  }
`;

// Project slider
export const CardBox = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
`;
export const CardImgBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  padding: 3px;
  background: #7d2ae8;
`;
export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
export const Card = styled.div`
  border-radius: 20px;
  background: #fff;
  position: relative;
  width: 300px;

  &::before {
    content: "";
    position: absolute;
    height: 40%;
    width: 100%;
    background: #7d2ae8;
    border-radius: 20px 20px 0 0;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
`;

export const CardIcons = styled.div`
  position: absolute;
  top: 10px;
  font-size: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MediaIcons = styled.div`
  color: #fff;
  opacity: 0.6;
  margin-top: 10px;
  transition: all 0.6s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
export const Profession = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;
export const ProName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: red;
`;
export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;
export const RatingIcon = styled.div`
  color: #7d2ae8;
  font-size: 20px;
  margin: 0 2px;
  cursor: pointer;
`;
export const Button = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
`;
