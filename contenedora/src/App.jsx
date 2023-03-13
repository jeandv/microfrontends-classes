import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from 'ui/Header';
import useStore from 'store/store';

const App = () => {
  const { count, increment, clear } = useStore();

  return (
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      {/* consumimos nuestro header que lo creamos a parte desde ui "Ir a webpack.config para ver como se obtuvo" */}
      <Header count={count} clear={clear} />
      <button
        className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'
        onClick={() => increment()}
      >
        Increment
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
