import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputFields = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur, 
  errorMessage,
  isValid,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getBorderColor = () => {
    if (value === '') {
      return 'border-gray-500'; 
    }
    return !isValid ? 'border-red-500' : 'border-green-300';
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-secondary mb-1" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          className={`w-full px-3 py-2 border text-secondary/80 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB662B] focus:border-transparent 
            ${getBorderColor()} pr-10`}
          id={id}
          type={showPassword ? 'text' : type} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur} 
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        )}
      </div>
      {!isValid && errorMessage && (
        <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputFields;