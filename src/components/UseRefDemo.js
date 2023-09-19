import React, { useRef, useState } from "react";

const UseRefDemo = () => {
  let x = 6;
  const ref = useRef(0);
  const [y, setY] = useState(0);

  return (
    <div className={`w-96 h-96 border  border-black p-4 m-4 `}>
      <button
        className="bg-blue-500 text-white p-4 mb-4 rounded-xl"
        onClick={() => {
          x = x + 1;
          console.log("x", x);
        }}>
        Increase X
      </button>
      <h2>Let = {x}</h2>

      <button
        className="mt-5 bg-blue-500 text-white p-4 mb-4 rounded-xl"
        onClick={() => {
          setY(y + 1);
          console.log("y", y);
        }}>
        Increase Y
      </button>
      <h2>Let = {y}</h2>

      <button
        className="mt-6 bg-blue-500 text-white p-4 mb-4 rounded-xl"
        onClick={() => {
          ref.current = ref.current + 1;
          console.log(ref);
        }}>
        Increase Z
      </button>
      <h2>Let = {ref.current}</h2>
    </div>
  );
};

export default UseRefDemo;
