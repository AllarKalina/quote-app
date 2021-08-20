import { AuthorQuote, FetchedQuoteList } from '../../interfaces';
import QuoteItem from './QuoteItem';
import { AnimateSharedLayout, motion } from 'framer-motion';
import classes from '../../styles/QuoteList/QuoteList.module.css';

const QuoteList: React.FC<FetchedQuoteList> = ({ results }) => {
  const size: number = 18;
  const sortResults = results.sort((a, b) =>
    a.content[0] > b.content[0] ? 1 : -1
  );
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }} className={classes.list}>
        {sortResults?.slice(0, size).map((item: AuthorQuote) => {
          return <QuoteItem id={item._id} content={item.content} />;
        })}
      </motion.ul>
    </AnimateSharedLayout>
  );
};

export default QuoteList;
