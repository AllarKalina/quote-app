import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import classes from '../../styles/QuoteItem/QuoteItem.module.css';
import Content from './Content';
import { useInView } from 'react-intersection-observer';

interface Props {
  id: string;
  content: string;
}

const QuoteItem: React.FC<Props> = ({ id, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref, inView } = useInView({
    root: null,
  });
  const animation = useAnimation();

  const quoteVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -50 },
  };

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [inView, animation]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      ref={ref}
      animate={animation}
      initial={'hidden'}
      variants={quoteVariants}
      key={id}
      layout
      onClick={toggleOpen}
      className={classes.item}
    >
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <h2>{content.split(' ').slice(0, 5).join(' ') + '...'}</h2>
          </motion.div>
        )}
        {isOpen && <Content content={content} />}
      </AnimatePresence>
    </motion.li>
  );
};

export default QuoteItem;
