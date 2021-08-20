import React from 'react';
import classes from '../../styles/Error/Error.module.css';
import Button from '../UI/Button';

interface Props {
  handleError: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Error: React.FC<Props> = ({ handleError }) => {
  return (
    <div className={classes.container}>
      <h1>Failed to find a quote with matching length</h1>
      <Button onClick={handleError}>OK</Button>
    </div>
  );
};

export default Error;
