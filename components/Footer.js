import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const FooterContainer = styled.section`
  border-top: 1px solid whitesmoke;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 20px 100px;
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

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaIcons>
        <Icon color="#1da1f2" href="https://github.com/bycho91" target="_blank">
          <FaTwitter />
        </Icon>
        <Icon color="#CDD9E5" href="https://github.com/bycho91" target="_blank">
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
      <div>Benjamin Portfolio &copy;</div>
    </FooterContainer>
  );
};

export default Footer;
