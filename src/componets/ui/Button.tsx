import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
