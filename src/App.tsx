import { useState, useEffect } from 'react';
import { FetchedQuote } from './interfaces';
import axios from 'axios';
import PageWrapper from './components/UI/PageWrapper';
import Quote from './components/Quote/Quote';
import Loading from './components/Loading/Loading';
import classes from './styles/App/App.module.css';
import Heading from './components/Heading/Heading';

const App = () => {
  const [quote, setQuote] = useState<FetchedQuote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isShowList, setIsShowList] = useState<boolean | null>(null);

  const url: string = 'https://api.quotable.io/random';

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
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchQuote(url);
  }, []);

  const changeAuthor = () => {
    setIsLoading(true);
    setTimeout(() => {
      fetchQuote(url);
      setIsShowList(false);
    }, 500);
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
        showList={getAuthorQuotes}
        clickHandler={changeAuthor}
        isLoading={isLoading}
      />
    </PageWrapper>
  );
};

export default App;
