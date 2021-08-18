import { useState, useEffect } from 'react';
import axios from 'axios';
import { QuoteLis, QuoteProps } from './interfaces';
import Quote from './components/Quote/Quote';
import Button from './components/UI/Button';
import QuoteList from './components/QuoteList/QuoteList';

const App = () => {
  const [quote, setQuote] = useState<QuoteProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isShowList, setIsShowList] = useState<boolean | null>(null);
  const [list, setList] = useState<QuoteLis['results'] | null>(null);

  const url: string = 'https://api.quotable.io/random';

  const fetchQuote = (url: string) => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setQuote(res.data);
      setIsLoading(false);
    });
  };

  const fetchAuthorQuotes = (url: string) => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      console.log(res.data);
      setIsLoading(false);
      setList(res.data.results);
    });
  };

  useEffect(() => {
    fetchQuote(url);
  }, []);

  const changeAuthor = () => {
    setIsLoading(true);
    fetchQuote(url);
    setIsShowList(false);
  };

  const getAuthorQuotes = () => {
    if (isShowList) {
      setIsShowList((prevState) => !prevState);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const urlA = `https://api.quotable.io/quotes?author=${quote?.author}`;
        fetchAuthorQuotes(urlA);
        setIsShowList((prevState) => !prevState);
      }, 500);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <header>
        <h1>Quotes</h1>
      </header>
      <main>
        <Quote
          author={quote?.author}
          content={quote?.content}
          showList={getAuthorQuotes}
        />
        <Button onClick={changeAuthor}>Change author</Button>
        {isShowList && <QuoteList results={list} />}
      </main>
    </>
  );
};

export default App;
