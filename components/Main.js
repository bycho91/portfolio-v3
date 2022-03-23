import styled from "styled-components";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
`;

const HeadshotImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
`;

const TopInfo = styled.div`
  line-height: 10px;

  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
`;

const Subtitle = styled.h3`
  color: #eb5e28;
  letter-spacing: 0.2em;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

const Icon = styled.a`
  font-size: 1.5rem;
  &:hover {
    color: ${(props) => props.color};
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  width: 100%;
`;

const IntroContent = styled.div`
  text-align: center;
  font-size: 1.1rem;
  line-height: 2em;
  padding: 0 20px;
  font-weight: 400;

  @media (min-width: 800px) {
    font-size: 1.3rem;
  }
`;

const Line = styled.span`
  position: absolute;
  width: 5000px;
  height: 1px;
  background-color: var(--accent-color);
  transform: rotate(-45deg);
  top: 0;
`;
const Line2 = styled.span`
  position: absolute;
  width: 5000px;
  height: 1px;
  background-color: var(--accent-color);
  transform: rotate(-45deg);
  top: 70%;
`;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <HeadshotImage src="/images/headshot.jpg" />

          <TopInfo>
            <Title>Benjamin Cho</Title>
            <Subtitle>front-end engineer</Subtitle>
          </TopInfo>
          <SocialMediaIcons>
            <Icon
              color="#1da1f2"
              href="https://github.com/bycho91"
              target="_blank"
            >
              <FaTwitter />
            </Icon>
            <Icon
              color="#CDD9E5"
              href="https://github.com/bycho91"
              target="_blank"
            >
              <FaGithub />
            </Icon>

            <Icon
              color="#0a66c2"
              href="https://www.linkedin.com/in/bchomba/"
              target="_blank"
            >
              <FaLinkedin />
            </Icon>
            <Icon
              color="#eb5e28"
              href="mailto: bycho1991@gmail.com"
              target="_blank"
            >
              <HiOutlineMail />
            </Icon>
          </SocialMediaIcons>
        </Top>
        <Bottom>
          <IntroContent>
            Hi there! I am an engineer based out of <strong>Dallas, TX</strong>.
            I enjoy using React to create fun projects, and I love tinkering
            with new tech. Currently I am working as a QA Engineer at Samsung,
            but my goal is to have a career building out beautiful looking
            components for the web. Feel free to reach out on any of my socials
            or just check out my CV{" "}
            <span>
              <a
                href=""
                style={{
                  color: "var(--accent-color)",
                  textDecoration: "underline",
                }}
              >
                here
              </a>
            </span>
            .
          </IntroContent>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Main;
