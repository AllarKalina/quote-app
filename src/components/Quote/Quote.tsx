import { QuoteProps } from '../../interfaces';

const Quote = ({ author, content }: QuoteProps) => {
  return (
    <div>
      <h1>{author}</h1>
      <h2>{content}</h2>
    </div>
  );
};

export default Quote;
