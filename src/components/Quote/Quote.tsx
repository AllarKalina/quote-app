import React from 'react';
import Button from '../UI/Button';
import Loading from '../Loading/Loading';
import { AuthorQuote, FetchedQuote } from '../../interfaces';
import { AnimateSharedLayout, motion } from 'framer-motion';
import classes from '../../styles/Quote/Quote.module.css';
import QuoteList from '../QuoteList/QuoteList';

interface Props {
  isShowList: boolean | null;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean | null;
  getAuthorQuotes: () => void;
  authorQuotes: AuthorQuote[];
}

const Quote: React.FC<FetchedQuote & Props> = ({
  author,
  content,
  isShowList,
  clickHandler,
  isLoading,
  getAuthorQuotes,
  authorQuotes,
}) => {
  const wrapper = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2,
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
      {isLoading && <Loading />}
      {!isLoading && (
        <div className={classes['content']}>
          <div className={classes['quote-wrapper']}>
            <h1>{content}</h1>
          </div>
          <div className={classes['author-wrapper']}>
            <h2
              onClick={getAuthorQuotes}
              className={isShowList ? classes.active : ''}
            >
              / {author}
            </h2>
          </div>
          <Button onClick={clickHandler}>Change Author</Button>
          {isShowList && <QuoteList results={authorQuotes} />}
        </div>
      )}
    </motion.div>
  );
};

export default Quote;
