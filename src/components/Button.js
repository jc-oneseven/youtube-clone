import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 bg-gray-300 rounded-lg"> {children} </button>
  );
};

export default Button;
