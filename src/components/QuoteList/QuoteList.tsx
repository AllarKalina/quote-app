import { useState, useEffect } from 'react';
import { AuthorQuote, FetchedQuoteList } from '../../interfaces';
import QuoteItem from './QuoteItem';
import { motion } from 'framer-motion';
import classes from '../../styles/QuoteList/QuoteList.module.css';

const QuoteList: React.FC<FetchedQuoteList> = ({ results }) => {
  const [state, setState] = useState<number | null>(1);
  const [array, setArray] = useState<AuthorQuote[]>([]);
  const size: number = 18;

  useEffect(() => {
    if (state === 1) {
      const sorted = results.sort((a, b) =>
        a.content[0] > b.content[0] ? 1 : -1
      );
      setArray(sorted);
    } else {
      const sorted = results.sort((a, b) =>
        a.content[0] < b.content[0] ? 1 : -1
      );
      console.log('asc');

      setArray(sorted);
    }

    console.log('lol');
  }, [results, state]);

  return (
    <motion.ul layout className={classes.list}>
      <div className={classes['sort-wrapper']}>
        <h2>Sort by:</h2>
        <button
          onClick={() => setState(1)}
          className={state === 1 ? classes.active : ''}
        >
          Desc
        </button>
        <button
          onClick={() => setState(2)}
          className={state === 2 ? classes.active : ''}
        >
          Asc
        </button>
      </div>
      {array.slice(0, size).map((item: AuthorQuote) => {
        return (
          <QuoteItem id={item._id} content={item.content} key={item._id} />
        );
      })}
    </motion.ul>
  );
};

export default QuoteList;
