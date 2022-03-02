import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { Data } from "../../Data";
import images from "../../images/city.jpg";
import { FaEye, FaGithub } from "react-icons/fa";
import { getProjects } from "../../BackendServices/ProjectsService";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: "auto",
    margin: "20px",
    background: "pink",
  },

  container: {
    width: "100vw",
    background: "#666",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

export default function AllProjects() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const { data } = await getProjects();
    setProjects(data);
  }, []);

  return (
    <div className={classes.container}>
      {projects.map((project) => (
        <Card key={project.id} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={images}
              title={project.text}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="btn btn-sm ">
              Open Site <FaEye className="m-1" style={{ fontSize: "1rem" }} />
            </Button>
            <Button size="small" color="primary">
              View code{" "}
              <FaGithub className="m-1" style={{ fontSize: "1rem" }} />
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
