import React from 'react';

interface Props {
  handleError: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Error: React.FC<Props> = ({ handleError }) => {
  return (
    <div>
      <h1>Failed to find a quote with matching length</h1>
      <button onClick={handleError}>Ok</button>
    </div>
  );
};

export default Error;
