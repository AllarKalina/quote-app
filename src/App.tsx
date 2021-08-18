import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Quote } from './interfaces';

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const url: string = 'https://api.quotable.io/random';

  const fetchQuote = () => {
    axios.get(url).then((res) => {
      setQuote(res.data);
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <header>
        <h1>Quotes</h1>
      </header>
      <main>
        <div>
          <h2>{quote?.content}</h2>
        </div>
      </main>
    </>
  );
}

export default App;
