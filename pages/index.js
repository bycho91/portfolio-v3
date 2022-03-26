import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { Main, Projects, Footer } from '../components';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <div className="main-container" data-scroll-container id="main-container">
      <CustomCursor />
      <Head>
        <title>Benjamin C | Portfolio</title>
        <meta name="description" content="Benjamin's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <Projects />
      <Footer />
    </div>
  );
}
