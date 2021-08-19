import { FetchedQuoteList } from '../../interfaces';

const QuoteList: React.FC<FetchedQuoteList> = ({ results }) => {
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
