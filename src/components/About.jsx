import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled full-stack developer with passionate knowledge of
        JavaScript, React, and Ruby on Rails and expertise in writing clean,
        efficient, and maintainable code. I'm also a fast learner and a team
        player who thrives in a collaborative environment with a strong work
        ethic. I'm a self-starter who is always looking to improve my skills.
        I'm a quick learner and collabrate closely with clients to create
        efficient, scalable, and user-friendly solutions that slove real-world
        problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default About;
