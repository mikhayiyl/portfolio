import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import images from "../../images/city.jpg";
import {
  BtnLink,
  ProjectArticle,
  ProjectBtn,
  ProjectCenter,
  ProjectSection,
  ProjectTitle,
} from "./ProjectsElements";
import { Data } from "../../Data";
import { getProjects } from "../../BackendServices/ProjectsService";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: "20px",
    marginBottom: "1rem",
    margin: "0 auto",
    objectFit: "cover",
    border: "4px solid darkmagenta",
    boxShadow: " 2px black",
  },
});

const Project = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(async () => {
    const { data } = await getProjects();
    setProjects(data);
    console.log("data", data);
  }, []);
  console.log("projects", projects);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <ProjectSection id="projects">
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectCenter>
        {projects.map((project, projectIndex) => {
          const { _id, tools, imageUrl, head } = project;
          // more
          let position = "nextSlide";
          if (projectIndex === index) {
            position = "activeSlide";
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <ProjectArticle className={position} key={_id}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={head}
                    height="140"
                    image={imageUrl}
                    title={tools[2]}
                  />
                  <CardContent>
                    <h6>tools</h6>
                    <Typography gutterBottom variant="h5" component="p">
                      {/* {tools.map((tool) => tool)} */}d
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </ProjectArticle>
          );
        })}

        <ProjectBtn style={{ left: "0" }} onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </ProjectBtn>
        <ProjectBtn
          style={{ right: "10px" }}
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </ProjectBtn>
      </ProjectCenter>
      <BtnLink to="/projects" className="btn btn-warning">
        ALL PROJECTS
      </BtnLink>
    </ProjectSection>
  );
};

export default Project;
