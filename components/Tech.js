import styles from '../styles/Tech.module.css';
import { Grid } from '@material-ui/core';
import { GrHtml5, GrCss3, GrReactjs } from 'react-icons/gr';
import { SiTypescript, SiJavascript, SiPostman } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
const Tech = () => {
  return (
    <section className={styles.techContainer}>
      <Grid container spacing={3} className={styles.gridContainer}>
        <Grid item>
          <GrHtml5 size='2rem' />
        </Grid>
        <Grid item>
          <GrCss3 size='2rem' />
        </Grid>
        <Grid item>
          <GrReactjs size='2rem' />
        </Grid>
        <Grid item>
          <SiJavascript size='2rem' />
        </Grid>
        <Grid item>
          <SiTypescript size='2rem' />
        </Grid>
        <Grid item>
          <VscJson size='2rem' />
        </Grid>
        <Grid item>
          <SiPostman size='2rem' />
        </Grid>
      </Grid>
    </section>
  );
};

export default Tech;
