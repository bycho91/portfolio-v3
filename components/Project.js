import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import styles from '../styles/Projects.module.css';
import { BsCodeSlash } from 'react-icons/bs';
import { CgLaptop } from 'react-icons/cg';
import { MdArrowBackIosNew } from 'react-icons/md';
const Project = ({
  project: { id, title, description, image, tags, source, visit },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.projectContainer} ${isOpen && styles.active}`}>
      <motion.div
        layout='position'
        transition={{ layout: { duration: 1 } }}
        className={styles.projectCard}
        onClick={(e) => {
          if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
            setIsOpen(!isOpen);
          }
        }}
      >
        <motion.div
          layout='position'
          className={`${styles.projectInfo} ${isOpen && styles.active}`}
        >
          <h4 className={`${styles.title} ${isOpen && styles.active}`}>
            {title}
          </h4>
          <p className={styles.description}>{description}</p>
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
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.imageContainer}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, exit: { duration: 2 } }}
              exit={{ x: 20, opacity: 0 }}
            >
              <Image
                width='350px'
                height='250px'
                src={image}
                alt={title}
                className={styles.projectImage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default Project;
