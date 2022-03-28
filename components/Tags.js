import styles from '../styles/Blogs.module.css';
import { Grid } from '@material-ui/core';

const Tags = ({ data }) => {
  return (
    <Grid container spacing={2} className={styles.tagsContainer}>
      {data.map((tag) => (
        <Grid item xs={4} key={tag}>
          <div className={styles.tag}>#{tag}</div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tags;
