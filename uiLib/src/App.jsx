import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Button from './Button/Button';

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Button variant='secondary' />
    <div>Name: uiLib</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Button variant='primary' />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
