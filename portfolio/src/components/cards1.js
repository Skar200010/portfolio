import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
const projectData = [
  {
    title: "To-Do List Management System",
    description: "A simple to-do list application to manage your tasks.",
    image: "/todo.png",
    link: "https://github.com/Skar200010/to-do-List",
  },
  
  {
    title: "Stock-Prediction-System",
    description: "A system to predict the stock prizes",
    image: "/Stock_Price_Prediction.webp",
    link: "https://github.com/Skar200010/stockporfolio",
  },
  {
    title: "Stock-PortFolio",
    description: "you can manage your stocks and track your expenses",
    image: "/stocks.jpg",
    link: "https://github.com/Skar200010/stockporfolio",
  },
  {
    title: "Api-Bucket",
    description: "ApI-Bucket to provide a code of api's to used thier own project ",
    image: "/bucket1.png",
    link: "https://github.com/Skar200010/ApiBucket",
  },
  {
    title: "Auth-Module",
    description:
      "authmodel contains login and registrations with token vvalidations and other functionalities",
    image: "/auth.jpg",
    link: "https://github.com/Skar200010/authmodule",
  },
  {
    title: "Web-Dev-Mern",
    description: "A comprehensive system for managing hotel operations.",
    image: "/mern.jpg",
    link: "https://github.com/Skar200010/webdevMERN",
  },
  {
    title: "Chat-App",
    description: "chat-App to chat with other people with efficiently.",
    image: "/chatapp.jpg",
    link: "https://github.com/Skar200010/chatapp",
  },
];

const skillData = [
  {
    title: "Backend",
    skills: ["Node.js", "JavaScript", "Postman", "Express.js"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js" , "Tailwind.css"],
  },
  {
    title: "Database & Devops",
    skills: ["MongoDB", "GitHub", "Aws", "MySQL"],
  },
];


const Cards1 = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        padding: 4,
        maxWidth: "100%",
        marginTop: "150px",
      }}
    >
      <Typography variant="h4" sx={{ color: "white", padding: "1rem" }}>
        Skills
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {skillData.map((item, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                maxWidth: 320,
                padding: 2,
                borderRadius: "10px",
                backgroundColor: "rgb(28, 27, 35)",
                border: "1px solid white",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    borderBottom: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(to right, #ff758c, #ff7eb3, #b36fff, #6f77ff, #758cff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ marginTop: 1, fontWeight: "bold" }}
                >
                  Skills:
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {item.skills.map((skill, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="white"
                      sx={{
                        margin: 0.5,
                        paddingX: 1,
                        paddingY: 0.5,
                        border: '1px solid white',
                      
                        
                  "&:hover": {
                    transform: "scale(1.05)",border: ' 1px solid green', 
                  },
                      }}
                    >
                      [{skill}]
                    </Typography>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ color: "white", padding: "1rem" }}>
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  maxWidth: 275,
                  height: "100%",
                  padding: -5,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards1;
