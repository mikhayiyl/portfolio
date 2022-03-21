import React from "react";
import {
  FaStar,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaStarHalf,
  FaRegStar,
} from "react-icons/fa";
import {
  Button,
  Card,
  CardBox,
  CardIcons,
  MediaIcons,
  Profession,
  ProName,
  Rating,
  RatingIcon,
  CardImgBox,
  CardContent,
  CardImg,
} from "./ProjectsElements";
const ProjectCard = () => {
  return (
    <CardBox>
      <div className="swiper-wrapper content">
        <Card>
          <CardContent>
            <CardImgBox>
              <CardImg src="1.jpg" alt="img" />
            </CardImgBox>

            <CardIcons>
              <MediaIcons className="fab fa-facebook">
                <FaFacebook />
              </MediaIcons>
              <MediaIcons className="fab fa-twitter">
                <FaTwitter />
              </MediaIcons>
              <MediaIcons className="fab fa-github">
                <FaGithub />
              </MediaIcons>
            </CardIcons>

            <Profession>
              <ProName>Web developer</ProName>
            </Profession>
            <Rating>
              <RatingIcon className="fas fa-star">
                <FaStar />
              </RatingIcon>
              <RatingIcon className="fas fa-star">
                <FaStar />
              </RatingIcon>
              <RatingIcon className="fas fa-star">
                <FaStar />
              </RatingIcon>
              <RatingIcon className="far fa-star">
                <FaStarHalf />
              </RatingIcon>
              <RatingIcon className="far fa-star">
                <FaRegStar />
              </RatingIcon>
            </Rating>
            <Button>
              <a href="youtube.com" className="btn btn-primary btn-sm m-1">
                Previev
              </a>
              <button href="/github" className="btn btn-secondary btn-sm m-1">
                Github
              </button>
            </Button>
          </CardContent>
        </Card>
      </div>
    </CardBox>
  );
};

export default ProjectCard;
