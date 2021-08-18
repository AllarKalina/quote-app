import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Quote } from './interfaces';

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const url: string = 'https://api.quotable.io/random';

  const fetchQuote = () => {
    setIsLoading(true);
    axios.get(url).then((res) => {
      setQuote(res.data);
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
        <h1>Quotes</h1>
      </header>
      <main>
        <div>
          <h1>{quote?.author}</h1>
          <h2>{quote?.content}</h2>
        </div>
        <button onClick={changeAuthor}>Change author</button>
      </main>
    </>
  );
}

export default App;
