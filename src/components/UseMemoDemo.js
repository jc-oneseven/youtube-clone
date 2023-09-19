import React, { useMemo, useState } from "react";
import { findNthPrime, isPrime } from "../utils/helper";

const UseMemoDemo = () => {
  console.log("rendering");
  const [inputValue, setInputValue] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findNthPrime(+inputValue), [inputValue]);

  return (
    <div
      className={`w-96 h-96 border border-black p-4 m-4 ${
        isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-100"
      } `}>
      <button
        className="bg-blue-500 text-white p-4 mb-4 rounded-xl"
        onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Change Theme
      </button>
      <input
        placeholder="Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={` rounded p-4 w-full ${
          isDarkTheme ? "bg-gray-900" : "bg-gray-100 border-gray-200 border"
        }`}
      />

      <h3 className="my-2 text-lg"> Output: {inputValue} </h3>
      <h3 className="my-2 text-lg"> nth prime: {prime} </h3>
    </div>
  );
};

export default UseMemoDemo;
