import { motion } from 'framer-motion';
import classes from '../../styles/Heading/Heading.module.css';
import { ReactComponent as YourSvg } from '../../assets/undraw_new_ideas_jdea.svg';

const Heading = () => {
  const line1 = 'Daily dose of';
  const line2 = 'inspiration.';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const picture = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2.2,
        duration: 1,
      },
    },
  };

  return (
    <div className={classes.heading}>
      <motion.h1 variants={sentence} initial='hidden' animate='visible'>
        {line1.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.div
        className={classes.woman}
        initial='hidden'
        animate='visible'
        variants={picture}
      >
        <YourSvg />
      </motion.div>
    </div>
  );
};

export default Heading;
