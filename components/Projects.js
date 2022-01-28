import styled from "styled-components";
import { projects } from "../static/projects/projectsData";
import Project from "./Project";

const Container = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  color: var(--accent-color);
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
  return (
    <Container>
      <Title>PROJECTS</Title>
      <Hr />
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </Container>
  );
};

export default Projects;
