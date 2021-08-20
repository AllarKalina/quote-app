import { motion } from 'framer-motion';
import classes from '../../styles/Loading/Loading.module.css';

const Loading = () => {
  const conVar = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cirVar = {
    start: {
      y: '0%',
    },
    end: { y: '100%' },
  };

  const cirTrans = {
    duration: 0.3,
    repeatType: 'reverse',
    repeat: Infinity,
    ease: 'easeInOut',
  };

  return (
    <div className={classes.inner}>
      <h1>Loading</h1>
      <motion.div
        className={classes.con}
        variants={conVar}
        initial='start'
        animate='end'
      >
        <motion.span
          className={classes.loadingCircle}
          variants={cirVar}
          transition={cirTrans}
        ></motion.span>
        <motion.span
          className={classes.loadingCircle}
          variants={cirVar}
          transition={cirTrans}
        ></motion.span>
        <motion.span
          className={classes.loadingCircle}
          variants={cirVar}
          transition={cirTrans}
        ></motion.span>
      </motion.div>
    </div>
  );
};

export default Loading;
