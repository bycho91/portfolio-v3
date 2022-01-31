import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Main, Projects } from "../components";
import CustomCursor from "../components/CustomCursor";

const MainContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <MainContainer data-scroll-container id="main-container">
      <CustomCursor />
      <Head>
        <title>Benjamin C | Portfolio</title>
        <meta name="description" content="Benjamin's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Projects />
      <Main />
    </MainContainer>
  );
}
