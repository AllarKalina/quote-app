import React from 'react';
import Button from '../UI/Button';
import { FetchedQuote } from '../../interfaces';
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
  return (
    <div className={classes['content-wrapper']}>
      <div className={classes['content']}>
        <div className={classes['quote-wrapper']}>
          <h1>{content}</h1>
        </div>
        <div className={classes['author-wrapper']}>
          <h2>/ {author}</h2>
        </div>
        <Button onClick={clickHandler}>Change Author</Button>
      </div>
    </div>
  );
};

export default Quote;
