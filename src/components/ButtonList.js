import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const list = [
  "All",
  "Live",
  "Namaste JavaScript",
  "Gaming",
  "Kapil Sharma",
  "IPL",
  "World Cup",
  "Vlogs",
  "iPhone",
  "Music",
];

const ButtonList = () => {
  return (
    <div className="flex gap-3 overflow-auto">
      {list.map((item) => (
        <Link
          className="whitespace-nowrap px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-200"
          key={item}
          to={`/results?search_query=${item}`}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
