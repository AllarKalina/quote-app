import { useState, useEffect } from 'react';
import axios from 'axios';
import { QuoteProps } from './interfaces';
import Quote from './components/Quote/Quote';
import Button from './components/UI/Button';

function App() {
  const [quote, setQuote] = useState<QuoteProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const url: string = 'https://api.quotable.io/random';
  const urlA: string = 'https://api.quotable.io/quotes?author=albert-einstein';

  const fetchQuote = () => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setQuote(res.data);
      setIsLoading(false);
    });
  };

  const fetchAuthorQuotes = () => {
    setIsLoading(true);
    axios.get(urlA).then((res) => {
      console.log(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const changeAuthor = () => {
    fetchQuote();
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <header>
        <h1 onClick={fetchAuthorQuotes}>Quotes</h1>
      </header>
      <main>
        <Quote {...quote} />
        <Button onClick={changeAuthor}>Change author</Button>
      </main>
    </>
  );
}

export default App;
