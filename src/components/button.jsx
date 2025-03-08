import React from 'react';

const button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-primary hover:bg-[#EB662B]/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default button;