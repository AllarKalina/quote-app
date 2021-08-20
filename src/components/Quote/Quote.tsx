import React, { useState } from 'react';
import Error from '../Error/Error';
import Button from '../UI/Button';
import Loading from '../Loading/Loading';
import { FetchedQuote } from '../../interfaces';
import { motion } from 'framer-motion';
import classes from '../../styles/Quote/Quote.module.css';
import { RiSettingsFill } from 'react-icons/ri';

interface Props {
  isShowList: boolean | null;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setSettings: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean | null;
  getAuthorQuotes: () => void;
  maximum: React.RefObject<HTMLInputElement>;
  minimum: React.RefObject<HTMLInputElement>;
  error: boolean | null;
  handleError: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Quote: React.FC<FetchedQuote & Props> = ({
  author,
  content,
  isShowList,
  clickHandler,
  isLoading,
  getAuthorQuotes,
  maximum,
  minimum,
  setSettings,
  error,
  handleError,
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

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
      {error && <Error handleError={handleError} />}
      {!isLoading && !error && (
        <div className={classes['content']}>
          <div className={classes['user-choice']}>
            <button
              className={classes.settings}
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <RiSettingsFill size='30px' color='#224177' />
            </button>
            {toggle && (
              <div className={classes['input-wrapper']}>
                <div className={classes.input}>
                  <h3>Maximum length</h3>
                  <input
                    type='number'
                    ref={maximum}
                    min='0'
                    max='10000'
                    step='10'
                    defaultValue='0'
                  />
                </div>

                <div className={classes.input}>
                  <h3>Minimum length</h3>
                  <input
                    type='number'
                    ref={minimum}
                    min='0'
                    max='10000'
                    step='10'
                    defaultValue='0'
                  />
                </div>
                <Button onClick={setSettings}>Set</Button>
              </div>
            )}
          </div>
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
        </div>
      )}
    </motion.div>
  );
};

export default Quote;
