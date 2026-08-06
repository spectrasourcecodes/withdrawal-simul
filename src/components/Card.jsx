// src/components/Card.jsx
import React from "react";

const Card = ({
  children,
  className = "",
  padding = "p-6 sm:p-8",
  shadow = true,
  rounded = "rounded-2xl",
  border = false,
  ...props
}) => {
  const baseStyles = "bg-white";
  const shadowClass = shadow ? "card-shadow" : "";
  const borderClass = border ? "border border-gray-100" : "";

  return (
    <div
      className={`
        ${baseStyles}
        ${rounded}
        ${padding}
        ${shadowClass}
        ${borderClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;