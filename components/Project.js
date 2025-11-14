import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import styles from '../styles/Projects.module.css';
import { BsCodeSlash } from 'react-icons/bs';
import { CgLaptop } from 'react-icons/cg';
import Tags from './Tags';

const Project = ({
  project: { id, title, description, image, tags, source, visit, tagsArr },
}) => {
  const openSite = () => {
    window.open(visit, '_blank');
  };
  return (
    <div className={`${styles.projectContainer}`}>
      <motion.div
        layout='position'
        transition={{ layout: { duration: 1 } }}
        className={styles.projectCard}
        onClick={openSite}
      >
        <div className={styles.topContainer}>
          <motion.div
            className={styles.imageContainer}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, exit: { duration: 2 } }}
            exit={{ x: 20, opacity: 0 }}
          >
            <Image
              fill
              width={200}
              height={200}
              style={{ objectFit: 'cover' }}
              src={image}
              alt={title}
              className={styles.projectImage}
            />
          </motion.div>
          <motion.div layout='position' className={`${styles.projectInfo}`}>
            <h4 className={`${styles.title}`}>{title}</h4>
            <p className={styles.description}>{description}</p>
          </motion.div>
        </div>

        <div className={styles.bottomContainer}>
          <div styles={styles.tagsContainer}>
            <Tags data={tagsArr} />
          </div>
          <div className={styles.linksContainer}>
            <a
              className={styles.icon}
              href={source}
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsCodeSlash size='1.5rem' />
            </a>
            <a
              className={styles.icon}
              href={visit}
              target='_blank'
              rel='noopener noreferrer'
            >
              <CgLaptop size='1.5rem' />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Project;
