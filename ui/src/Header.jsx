import React from 'react';

const Header = ({ count, clear }) => {
  return (
    <header className='bg-blue-700 text-white font-bold text-3xl p-5 flex items-center mb-4'>
      <div className='flex-grow'>Logo</div>
      <div>
        <span className='p-5'>{count}</span>
      </div>
      <button
        className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'
        onClick={() => clear()}
      >
        Re start
      </button>
    </header>
  );
};

export default Header;
