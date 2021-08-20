import { useState, useEffect } from 'react';
import { AuthorQuote, FetchedQuoteList } from '../../interfaces';
import QuoteItem from './QuoteItem';
import { motion } from 'framer-motion';
import classes from '../../styles/QuoteList/QuoteList.module.css';

const QuoteList: React.FC<FetchedQuoteList> = ({ results }) => {
  const [state, setState] = useState<string | null>(null);
  const size: number = 18;
  let resultsCopy = results;

  useEffect(() => {
    if (state === 'Desc') {
      resultsCopy = results.sort().reverse();
    } else if (state === 'Asc') {
      resultsCopy = results.sort();
    }
  }, [state]);

  return (
    <motion.ul layout className={classes.list}>
      <div className={classes['sort-wrapper']}>
        <h2>Sort by:</h2>
        <button
          onClick={() => setState('Desc')}
          className={state === 'Desc' ? classes.active : ''}
        >
          Desc
        </button>
        <button
          onClick={() => setState('Asc')}
          className={state === 'Asc' ? classes.active : ''}
        >
          Asc
        </button>
      </div>
      {resultsCopy.slice(0, size).map((item: AuthorQuote) => {
        return (
          <QuoteItem id={item._id} content={item.content} key={item._id} />
        );
      })}
    </motion.ul>
  );
};

export default QuoteList;
