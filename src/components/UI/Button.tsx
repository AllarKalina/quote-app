import React from 'react';
import classes from '../../styles/Button/Button.module.css';

interface ButtonProps {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
