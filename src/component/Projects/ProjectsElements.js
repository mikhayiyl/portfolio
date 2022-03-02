import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectSection = styled.section`
  height: 100vh;
  width: 100vw;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1 rem;
  color: #fff;
  position: relative;
`;

export const ProjectTitle = styled.span`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ProjectCenter = styled.section`
  margin: 0 auto;
  margin-top: 2rem;
  width: 60vw;
  height: 450px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;

  @media (max-width: 700px) {
    width: 100vw;
  }
`;
export const ProjectImage = styled.img`
  border-radius: 20px;
  margin-bottom: 1rem;
  width: 20em;
  height: 15em;
  object-fit: cover;
  border: 4px solid darkmagenta;
  box-shadow: 2px black;
`;

export const ProjectBtn = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: 370px;
  background: cadetblue;
  color: #111;
  width: 2rem;
  margin: 0 20px;
  height: 2rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: rgb(20, 220, 20);
    box-shadow: 3px 4px 20px #fff;
  }

  @media (min-width: 600px) {
    font-size: 1.5rem;
    top: 200px;
  }
`;
export const BtnDiv = styled.div`
  font-size: 1rem;
`;
export const BtnLink = styled(Link)`
  transition: 0.5s ease-in-out;
  font-weight: 600;
  margin-bottom: 3rem;
  &:hover {
    box-shadow: 0 0 50px #fff;
  }
`;
export const ProjectArticle = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in;
`;
