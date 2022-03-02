import styled from "styled-components";

export const BodyScene = styled.div`
  background-color: #000;
  min-height: 100vh;
  display: flex;
  height: 1600px;
  justify-content: center;
  align-items: center;
  font-size: 75px;
  overflow: hidden;
  perspective: 14em;
  perspective-origin: 50% calc(50% - 2em);
  @media screen and (max-width: 700px) {
    min-height: 900px;
    height: 2800px;
  }
`;
export const SceneBox = styled.div`
  position: relative;
  height: auto;
  transform-style: preserve-3d;
  animation: sceneRotate 30s infinite linear;
  color: #000;
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
  top: 5em;
  width: 13em;
  height: 15em;
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
  width: 17em;
  height: auto;
  padding: 0.5rem;
  right: 25%;
  border-radius: 20px;
  position: absolute;
  top: 1rem;
  background-image: radial-gradient(circle at top, #222, #000);
  box-shadow: 0 0 20px 0px #fff;

  @media screen and (max-width: 1800px) {
    right: 19%;
    width: 15em;
    height: 6.5em;
    padding: 2rem;
    top: 2rem;
  }
  @media screen and (max-width: 1760px) {
    right: 9%;
  }
  @media screen and (max-width: 1000px) {
    height: 7em;
    right: 5%;
  }
  @media screen and (max-width: 890px) {
    width: 9em;
  }

  @media screen and (max-width: 760px) {
    right: 11%;
    width: 4em;
    padding: 0.7rem;
    height: 10em;
  }
  @media screen and (max-width: 320px) {
    width: 3em;
    right: 10%;
  }
`;
export const Span = styled.span`
  font-weight: bold;
  color: yellow;
`;
export const BallBox = styled.div`
  font-size: 1rem;

  @media screen and (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

// export const ProgressBarLeft = styled.span`
//   animation: loading-2 1.8s linear forwards 1.8s;
// `;
export const ProgressBarRight = styled.span`

  animation: loading-1 1.8s linear forwards;
}

@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}


// @keyframes loading-2 {
//   0% {
//     -webkit-transform: rotate(0deg);
//     transform: rotate(0deg);
//   }

//   100% {
//     -webkit-transform: rotate(79deg);
//     transform: rotate(79deg);
//   }
// }
// `;
export const HtmlProgress = styled.span`

animation: html 1.8s linear forwards 1.8s;
@keyframes html {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
export const JavascriptProgress = styled.span`

animation: javascript 1.8s linear forwards 1.8s;
@keyframes javascript {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(79.2deg);
    transform: rotate(79.2deg);
  }
`;
export const ReactProgress = styled.span`

animation: react 1.8s linear forwards 1.8s;
@keyframes react {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(94deg);
    transform: rotate(94deg);
  }
`;
export const GitProgress = styled.span`

animation: git 1.8s linear forwards 1.8s;
@keyframes git {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(68deg);
    transform: rotate(68deg);
  }
`;
export const NodeProgress = styled.span`

animation: nodejs 1.6s linear forwards 1.6s;
@keyframes nodejs {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(14.4deg);
    transform: rotate(14.4deg);
  }
`;

export const ProgressValue = styled.div`
  position: absolute;
  color: #000;
  top: 0;
  left: 0;
`;
export const RoundedLg = styled.div`
  border-radius: 1rem;
`;

export const TextGray = styled.span`
  color: #aaa;
`;
export const Heading4 = styled.h4`
  line-height: 1rem;
`;
