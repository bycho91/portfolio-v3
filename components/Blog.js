import styles from '../styles/Blogs.module.css';
import { CgNotes } from 'react-icons/cg';
import { Grid } from '@material-ui/core';

const Blog = ({ data }) => {
  return (
    <div className={styles.blogCard}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Grid container spacing={2} className={styles.tagsContainer}>
        {data.tags.map((tag) => (
          <Grid item xs={4} key={tag}>
            <div className={styles.tag}>#{tag}</div>
          </Grid>
        ))}
      </Grid>
      <div className={styles.icon}>
        <a href={data.source} target='_blank' rel='noopener noreferrer'>
          <CgNotes size='2rem' />
        </a>
      </div>
    </div>
  );
};

export default Blog;
