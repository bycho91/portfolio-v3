import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Main, Projects, Footer } from "../components";

const MainContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Benjamin C | Portfolio</title>
        <meta name="description" content="Benjamin's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Projects />
      <Footer />
    </MainContainer>
  );
}
