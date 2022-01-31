import styled from "styled-components";
import { useEffect, useState } from "react";
import { projectsData } from "../static/projects/projectsData";
import Project from "./Project";

const Container = styled.section`
  width: 400%;
  height: 80vh;
  background: #d53f41;
  padding: 2em 5vw;
  display: flex;
  flex-wrap: nowrap;
  margin: 5vw 0;
`;

const Title = styled.h2`
  color: white;
  letter-spacing: 0.3em;
  font-size: 2rem;
  text-align: center;
`;

const Hr = styled.span`
  width: 50px;
  height: 1.5px;
  display: block;
  background-color: var(--accent-color);
  margin: 0 auto;
  margin-bottom: 2em;
`;

const Projects = () => {
  const [activeProject, setActiveProject] = useState(1);

  const updateActiveProject = () => {};

  return (
    <Container>
      {/* <Title>PROJECTS2</Title>
      <Hr /> */}
      {projectsData.map((project, index) => (
        <Project
          project={project}
          key={project.id}
          index={index}
          updateActiveProject={(index) => setActiveProject(index + 1)}
        />
      ))}
    </Container>
  );
};

export default Projects;
