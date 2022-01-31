import styled from "styled-components";

const ProjectCard = styled.div`
  width: 100vw;
  padding: 20px 5vw;
  display: flex;
  color: white;
  gap: 2em;
`;
const ProjectImage = styled.img`
  background-size: cover;

  background-position: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectInfo = styled.div``;

const Title = styled.h1`
  font-size: 5vw;
`;

const Description = styled.h6`
  font-size: 1vw;
`;

const Project = ({
  project: { id, title, description, image, tags, source, visit },
  index,
  updateActiveProject,
}) => {
  return (
    <ProjectCard className="project-item-wrapper">
      <ProjectInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ProjectInfo>
      <ProjectImage src={image} alt={title} />
    </ProjectCard>
  );
};
export default Project;
