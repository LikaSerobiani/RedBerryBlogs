import React, { useState, useEffect } from "react";
import ErrorIcon from "../Icons/ErrorIcon";

const Input = ({
  type,
  id,
  label,
  value,
  placeholder,
  onChange,
  validation,
  isValid: propIsValid,
  ...props
}) => {
  const [isValid, setIsValid] = useState(propIsValid);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsValid(propIsValid);
  }, [propIsValid]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (onChange) {
      onChange(inputValue);
    }

    if (validation) {
      const { isValid, errorMessage } = validation(inputValue);
      setIsValid(isValid);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id || "inputField"}
        className="block text-sm font-medium text-[#1A1A1F] mb-2"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        placeholder={placeholder}
        className="w-full p-2 border border-solid pl-4 text-sm placeholder-[#85858D] border-primary focus:outline-none focus:ring focus:border-purple-500 rounded-lg bg-[#F7F7FF]"
        onChange={handleInputChange}
      />
      {!isValid && (
        <div className="text-red-500 text-sm flex flex-row gap-[8px] mt-[8px]">
          <ErrorIcon /> {errorMessage || "Invalid input."}
        </div>
      )}
    </div>
  );
};

export default Input;
