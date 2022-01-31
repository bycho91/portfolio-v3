import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { projectsData } from "../static/projects/projectsData";
import Project from "./Project";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import cn from "classnames";

const ProjectsContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
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
  text-align: center;
`;

const ProjectCounter = styled.h3`
  position: absolute;
  left: 20px;
  top: 0;
  z-index: 100;
  color: white;
  font-size: 0.8rem;
`;

const Projects = () => {
  const [activeProject, setActiveProject] = useState(1);

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".project-item-wrapper");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#projects-section",
        scroller: "#projects-section",
        start: "top top",
        pin: true,
        scrub: 0.5,
        span: 1 / (sections.length - 1),
        end: () => `+=${ref.current.offsetWidth}`,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  const updateActiveProject = () => {};

  return (
    <ProjectsContainer ref={ref} data-scroll-section id="projects-section">
      <Wrapper>
        <ProjectCounter>
          Project {activeProject} of {projectsData.length}
        </ProjectCounter>
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
      </Wrapper>
    </ProjectsContainer>
  );
};

export default Projects;
