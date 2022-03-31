import styles from '../styles/Blogs.module.css';
import { CgNotes } from 'react-icons/cg';
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import Tags from './Tags';

const Blog = ({ data }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <h3 className={styles.title}>{data.title}</h3>
        <Image width={40} height={40} src={data.imgUrl} alt={data.title} />
      </div>
      <p>{data.description}</p>
      <div className={styles.bottom}>
        <p className={styles.date}>{data.date}</p>

        <div className={styles.icon}>
          <a href={data.source} target='_blank' rel='noopener noreferrer'>
            <CgNotes size='2rem' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
