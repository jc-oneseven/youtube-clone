import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // subscribe to specifc part of the store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // this is known as early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="sticky top-0 h-full border-r border-gray-200 shadow-md p-4">
      <ul>
        <li>
          <Link to={"/"}> Home </Link>
        </li>
        <li> Shorts </li>
        <li> Subscriptions </li>
        <li> Music </li>
      </ul>

      <h2 className="mt-4 font-bold text-lg"> Watch later </h2>
      <ul>
        <li> Music </li>
        <li> Sports </li>
        <li> Movies </li>
        <li> Gaming </li>
      </ul>
    </div>
  );
};

export default Sidebar;
