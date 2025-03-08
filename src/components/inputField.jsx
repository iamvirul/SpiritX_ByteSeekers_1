import React from 'react';

const inputField = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB662B] focus:border-transparent"
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