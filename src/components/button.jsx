import React from 'react';

const Button = ({ children, onClick, icon, className }) => {
  return (
    <button
      className={`flex items-center justify-center w-full py-3 px-4 rounded-md text-sm font-medium transition-colors ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
