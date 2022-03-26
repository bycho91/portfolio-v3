import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from '../styles/Footer.module.css';

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
    <section className={styles.footerContainer}>
      <div className={styles.socialMediaIcons}>
        <a
          className={styles.icon}
          href='https://github.com/bycho91'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter />
        </a>
        <Icon
          href='https://github.com/bycho91'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </Icon>

        <Icon
          href='https://www.linkedin.com/in/bchomba/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </Icon>
        <Icon
          href='mailto: bycho1991@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <HiOutlineMail />
        </Icon>
      </div>
      <div>Benjamin Portfolio &copy;</div>
    </section>
  );
};

export default Footer;
