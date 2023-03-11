import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from 'ui/Header';

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    {/* consumimos nuestro header que lo creamos a parte desde ui "Ir a webpack.config para ver como se obtuvo" */}
    <Header />
    <div>Name: contenedora</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
