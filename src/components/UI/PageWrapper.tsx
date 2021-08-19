import React from 'react';
import classes from '../../styles/PageWrapper/PageWrapper.module.css';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return <div className={classes.inner}>{children}</div>;
};

export default PageWrapper;
