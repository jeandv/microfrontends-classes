import React from 'react';

const Header = () => {
  return (
    <header className='bg-blue-700 text-stone-300 font-bold text-3xl p-5 flex items-center'>
      <div className='flex-grow'>Logo</div>
      <div>
        <span className='p-5'>0</span>
      </div>
      <button className='bg-indigo-800 text-white font-bold py-2 px-4 rounded'>
        Re start
      </button>
    </header>
  );
};

export default Header;
