import React from 'react';
import Button from '../UI/Button';
import { FetchedQuote } from '../../interfaces';
import { motion } from 'framer-motion';
import classes from '../../styles/Quote/Quote.module.css';

interface Props {
  showList?: React.MouseEventHandler<HTMLHeadingElement>;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Quote: React.FC<FetchedQuote & Props> = ({
  author,
  content,
  showList,
  clickHandler,
}) => {
  const wrapper = {
    hidden: { opacity: 0, x: 100 },
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
    <motion.div
      variants={wrapper}
      initial='hidden'
      animate='visible'
      className={classes['content-wrapper']}
    >
      <div className={classes['content']}>
        <div className={classes['quote-wrapper']}>
          <h1>{content}</h1>
        </div>
        <div className={classes['author-wrapper']}>
          <h2>/ {author}</h2>
        </div>
        <Button onClick={clickHandler}>Change Author</Button>
      </div>
    </motion.div>
  );
};

export default Quote;
