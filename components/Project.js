import styled from "styled-components";

const ProjectWrapper = styled.div`
  outline: 1px solid white;
  height: 100%;
  display: flex;
  width: 100%;
  flex-basis: 100%;
`;
const ProjectItem = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
`;
const ProjectImage = styled.img`
  flex: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProjectContent = styled.div`
  position: absolute;
  bottom: 10%;
  z-index: 1;
  // transform: translateX(-20%);
  color: white;
  mix-blend-mode: difference;
`;
const ProjectTitle = styled.h1`
  line-height: 3vw;
  font-weight: 600;
  font-size: 3vw;
`;
const ProjectDescription = styled.h6`
  position: relative;
  font-weight: 400;
  font-size: 1em;
`;

const Project = ({
  project: { id, title, description, image, tags, source, visit },
  index,
  updateActiveProject,
}) => {
  return (
    <ProjectWrapper>
      <ProjectItem>
        <ProjectContent>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectContent>
        <ProjectImage src={image} alt={title} />
      </ProjectItem>
    </ProjectWrapper>
  );
};
export default Project;
