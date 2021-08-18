import React from 'react';
import { QuoteProps } from '../../interfaces';

interface Props {
  author: string;
  content: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Quote: React.FC<Props | QuoteProps> = ({ author, content }, props) => {
  return (
    <div>
      <h1 onClick={props.onClick}>{author}</h1>
      <h2>{content}</h2>
    </div>
  );
};

export default Quote;
