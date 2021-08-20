import { useState, useEffect, useRef } from 'react';
import { AuthorQuote, FetchedQuote } from './interfaces';
import axios from 'axios';
import PageWrapper from './components/UI/PageWrapper';
import Quote from './components/Quote/Quote';
import Heading from './components/Heading/Heading';
import QuoteList from './components/QuoteList/QuoteList';

const App = () => {
  const [quote, setQuote] = useState<FetchedQuote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [isShowList, setIsShowList] = useState<boolean | null>(null);
  const [quoteList, setQuoteList] = useState<AuthorQuote[]>([]);
  const maximumInput = useRef<HTMLInputElement>(null);
  const minimumInput = useRef<HTMLInputElement>(null);

  let url: string = 'https://api.quotable.io/random';

  /*
    Method for fetching random quote
  */
  const fetchQuote = (url: string) => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        const { author, content } = res.data;
        setQuote({ author: author, content: content });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });
  };

  /*
    Method for fetching selected author quotes
  */
  const fetchAuthorQuotes = (url: string) => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setQuoteList(res.data.results);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchQuote(url);
  }, [url]);

  /*
    Method which changes random quote
  */
  const changeAuthor = () => {
    setIsShowList(false);
    setIsLoading(true);
    setTimeout(() => {
      fetchQuote(url);
    }, 500);
  };

  const changeUrl = () => {
    const max = maximumInput.current?.value;
    const min = minimumInput.current?.value;

    const minString = '?minLength=' + min;
    url = url + minString;

    const maxString = '&maxLength=' + max;
    url = url + maxString;
  };

  const handleErrorButton = () => {
    setError((prevState) => !prevState);
  };

  /*
    Method which triggers after clicking author's name, fetches author quotes
  */
  const getAuthorQuotes = () => {
    if (isShowList) {
      setIsShowList((prevState) => !prevState);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const urlA = `https://api.quotable.io/quotes?author=${quote?.author}`;
        fetchAuthorQuotes(urlA);
        setIsShowList((prevState) => !prevState);
      }, 1000);
    }
  };

  return (
    <PageWrapper>
      <Heading />
      <div>
        <Quote
          author={quote?.author}
          content={quote?.content}
          isShowList={isShowList}
          getAuthorQuotes={getAuthorQuotes}
          clickHandler={changeAuthor}
          isLoading={isLoading}
          maximum={maximumInput}
          minimum={minimumInput}
          setSettings={changeUrl}
          error={error}
          handleError={handleErrorButton}
        />
        {!isLoading && isShowList && <QuoteList results={quoteList} />}
      </div>
    </PageWrapper>
  );
};

export default App;
