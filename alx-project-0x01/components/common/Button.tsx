import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, className = "", onClick }) => (
  <button
    className={`px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition ${className}`}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;