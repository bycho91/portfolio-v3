import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import styles from '../styles/Footer.module.css';

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
        <a
          className={styles.icon}
          href='https://github.com/bycho91'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>

        <a
          className={styles.icon}
          href='https://www.linkedin.com/in/bchomba/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          className={styles.icon}
          href='mailto: bycho1991@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <HiOutlineMail />
        </a>
      </div>
      <div styles={styles.text}>Benjamin Portfolio &copy;</div>
    </section>
  );
};

export default Footer;
