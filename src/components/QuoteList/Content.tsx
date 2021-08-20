import React from 'react';
import { motion } from 'framer-motion';
import classes from '../../styles/QuoteItem/Content.module.css';

interface Props {
  content: string;
}

const Content: React.FC<Props> = ({ content }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      className={classes.wrap}
    >
      <h1>{content}</h1>
    </motion.div>
  );
};

export default Content;
