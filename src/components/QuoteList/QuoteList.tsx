import { QuoteLis } from '../../interfaces';

const QuoteList: React.FC<QuoteLis> = ({ results }) => {
  return (
    <div>
      <ul>
        {results?.map((item) => {
          return (
            <li key={item._id}>
              <h1>{item.content}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuoteList;
