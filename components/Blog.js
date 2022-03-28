import styles from '../styles/Blogs.module.css';
import { CgNotes } from 'react-icons/cg';
import { Grid } from '@material-ui/core';
import Tags from './Tags';

const Blog = ({ data }) => {
  return (
    <div className={styles.blogCard}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Tags data={data.tags} />
      <div className={styles.icon}>
        <a href={data.source} target='_blank' rel='noopener noreferrer'>
          <CgNotes size='2rem' />
        </a>
      </div>
    </div>
  );
};

export default Blog;
