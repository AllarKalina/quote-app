import React from 'react';
import { QuoteProps } from '../../interfaces';

interface Props {
  showList?: React.MouseEventHandler<HTMLHeadingElement>;
}

const Quote: React.FC<QuoteProps & Props> = ({ author, content, showList }) => {
  return (
    <div>
      <h1 onClick={showList}>{author}</h1>
      <h2>{content}</h2>
    </div>
  );
};

export default Quote;
