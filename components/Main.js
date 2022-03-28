import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import styles from '../styles/Main.module.css';

const Main = () => {
  return (
    <section className={styles.containerSection}>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
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
            <motion.h1
              className={styles.title}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Benjamin Cho
            </motion.h1>
            <motion.h4
              className={styles.subtitle}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              front-end engineer
            </motion.h4>
          </div>
          <motion.div
            className={styles.socialMediaIcons}
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1, type: 'spring', stiffness: 2000 }}
            transition={{ delay: 1.5 }}
          >
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
          </motion.div>
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
                href='https://www.dropbox.com/s/cbqn77vcuinvkxk/benjamin_cho_fe_resume.pdf?dl=0'
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
      </motion.div>
    </section>
  );
};

export default Main;
