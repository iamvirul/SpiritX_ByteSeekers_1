import React from 'react';

const inputField = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-textColor text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default inputField;