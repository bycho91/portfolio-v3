import styled from "styled-components";
import { TweenMax, Power3 } from "gsap";

const ProjectCard = styled.div`
  width: 100%;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: center;
    gap: 2em;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media (min-width: 700px) {
    width: 700px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    flex-basis: 1;
    transition: all 0.8s ease;
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 0 20px;
  @media (min-width: 700px) {
    max-width: 400px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: relative;
    flex-basis: 1;
    transition: all 0.8s ease;
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }
`;

const ProjectTitle = styled.h1`
  margin-bottom: 0.3em;
  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

const Hr = styled.span`
  width: 50px;
  height: 1.5px;
  background: var(--accent-color);
  display: block;
`;

const ProjectDescription = styled.p`
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 700px) {
    position: absolute;
    width: 100%;
    bottom: 5%;
    left: 0;
  }
`;

const ProjectLinkItem = styled.a`
  color: var(--accent-color);
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
    color: black;
    background: white;
  }

  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const Project = ({
  project: { id, title, description, image, tags, source, visit },
}) => {
  return (
    <ProjectCard>
      <ProjectImage src={image} alt={title} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <Hr />
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectLinks>
          <ProjectLinkItem href={source} target="_blank">
            {`\<code\/\>`}
          </ProjectLinkItem>
          <ProjectLinkItem href={visit} target="_blank">
            Visit Site
          </ProjectLinkItem>
        </ProjectLinks>
      </ProjectContent>
    </ProjectCard>
  );
};

export default Project;
