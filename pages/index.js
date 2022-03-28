import Head from 'next/head';
import { Main, Projects, Footer } from '../components';
import BlogList from '../components/BlogList';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  return (
    <div className='main-container'>
      <CustomCursor />
      <Head>
        <title>Benjamin C | Portfolio</title>
        <meta name='description' content="Benjamin's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main />
      <Projects />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Home;
