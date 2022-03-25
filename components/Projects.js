import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { projectsData } from "../static/projects/projectsData";
import Project from "./Project";
import { motion } from "framer-motion";

const ProjectsContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 600%;
  height: 80vh;
  background: #d53f41;
  display: flex;
  flex-wrap: nowrap;
  margin: 5vw 0;
`;

const Title = styled.h2`
  color: white;
  letter-spacing: 0.3em;
  font-size: 2rem;
`;

const ProjectsCarousel = styled(motion.div)`
  width: 400%;
  overflow-x: hidden;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Wrapper>
        <Title>PROJECTS2</Title>
        <ProjectsCarousel animate={{ rotate: 360 }}>
          {projectsData.map((project, index) => (
            <Project project={project} key={project.id} />
          ))}
        </ProjectsCarousel>
      </Wrapper>
    </ProjectsContainer>
  );
};

export default Projects;
