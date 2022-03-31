import { projectsData } from '../static/projects/projectsData';
import Project from './Project';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';
import { Grid } from '@material-ui/core';
import Tech from './Tech';

const Projects = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.sectionTitle}>PROJECTS</h1>
      <Tech />
      <Grid container spacing={2} className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={project.id}
            className={styles.project}
          >
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
