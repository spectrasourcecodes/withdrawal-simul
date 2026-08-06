// src/components/Input.jsx
import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      value,
      onChange,
      onBlur,
      error,
      placeholder,
      required = false,
      className = "",
      inputClassName = "",
      labelClassName = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label
            htmlFor={name}
            className={`
              block text-sm font-medium text-gray-700 mb-1.5
              ${required ? "after:content-['*'] after:text-red-500 after:ml-0.5" : ""}
              ${labelClassName}
            `}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-4 py-3 text-gray-800 bg-white rounded-xl border
            transition-all duration-200
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
            disabled:bg-gray-50 disabled:text-gray-500
            ${hasError ? "border-red-500 focus:ring-red-500" : "border-gray-200 hover:border-gray-300"}
            ${inputClassName}
          `}
          {...props}
        />

        {hasError && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;