import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import styles from '../styles/Main.module.css';

const Main = () => {
  return (
    <section
      className={styles.containerSection}
      data-scroll-section
      id='header-section'
    >
      <div className={styles.wrapper}>
        <div className='top'>
          <div className={styles.imageBox}>
            <Image
              className={styles.headshotImage}
              width='180px'
              height='180px'
              src='/images/headshot.jpg'
              alt='headshot'
            />
          </div>

          <div className={styles.topInfo}>
            <h1 className={styles.title}>Benjamin Cho</h1>
            <h4 className={styles.subtitle}>front-end engineer</h4>
          </div>
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
        </div>
        <div className={styles.bottom}>
          <p className={styles.introContent}>
            Hi there! I am an engineer based out of <strong>Dallas, TX</strong>.
            I enjoy using React to create fun projects, and I love tinkering
            with new tech. Currently I am working as a QA Engineer at Samsung,
            but my goal is to have a career building out beautiful looking
            components for the web. Feel free to reach out on any of my socials
            or just check out my CV{' '}
            <span>
              <a
                href='https://shorturl.at/etJPZ'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: 'var(--accent-color)',
                  textDecoration: 'underline',
                }}
              >
                here
              </a>
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
