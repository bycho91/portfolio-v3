import { blogsData } from '../static/blogs/blogsData';
import styles from '../styles/Blogs.module.css';
import Blog from './Blog';
import { Grid } from '@material-ui/core';

const BlogList = () => {
  return (
    <div className={styles.blogsContainer}>
      <h1 className={styles.sectionTitle}>BLOG POSTS</h1>
      <Grid container spacing={3}>
        {blogsData.map((blog) => (
          <Grid item xs={12} lg={4} key={blog.id}>
            <Blog data={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogList;
