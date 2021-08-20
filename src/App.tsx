import { useState, useEffect, useReducer } from 'react';
import { AuthorQuote, FetchedQuote, FetchedQuoteList } from './interfaces';
import axios from 'axios';
import PageWrapper from './components/UI/PageWrapper';
import Quote from './components/Quote/Quote';
import Heading from './components/Heading/Heading';

const App = () => {
  const [quote, setQuote] = useState<FetchedQuote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isShowList, setIsShowList] = useState<boolean | null>(null);
  const [quoteList, setQuoteList] = useState<AuthorQuote[]>([]);
  let url: string = 'https://api.quotable.io/random';

  const fetchQuote = (url: string) => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      const { author, content } = res.data;
      setQuote({ author: author, content: content });
      setIsLoading(false);
    });
  };

  const fetchAuthorQuotes = (url: string) => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      console.log(res.data);
      setQuoteList(res.data.results);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchQuote(url);
  }, [url]);

  const changeAuthor = () => {
    setIsLoading(true);
    setTimeout(() => {
      fetchQuote(url);
      setIsShowList(false);
    }, 500);
  };

  const getQuote = () => {
    fetchQuote(url);
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

  return (
    <PageWrapper>
      <Heading />
      <Quote
        author={quote?.author}
        content={quote?.content}
        isShowList={isShowList}
        getAuthorQuotes={getAuthorQuotes}
        clickHandler={changeAuthor}
        isLoading={isLoading}
        authorQuotes={quoteList}
      />
    </PageWrapper>
  );
};

export default App;
