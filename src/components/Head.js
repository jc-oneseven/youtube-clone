import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSplice";
import { YOUTUBE_SUGGEST_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispath = useDispatch();

  // suscribe to the toggleMenu from the store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const toggleMenuHanlder = () => {
    dispath(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);

  const searchChangeHandler = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGEST_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);

    dispath(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="sticky top-0 bg-white grid grid-flow-col justify-between items-center p-2 border border-b-gray-200">
      <div className="flex items-center gap-4 col-span-1">
        <a
          className="flex-shrink-0"
          href="locolhost:3000"
          onClick={() => toggleMenuHanlder()}>
          {isMenuOpen ? (
            <img
              alt="menu button"
              className="h-4"
              src="https://static.thenounproject.com/png/1954009-200.png"
            />
          ) : (
            <img
              alt="menu button"
              className="h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            />
          )}
        </a>
        <img
          alt="Youtube Logo in red and black"
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 ">
        <div className="flex justify-center relative">
          <input
            className="w-1/2 border border-gray-300 py-2 px-4 rounded-full"
            type="text"
            value={searchQuery}
            placeholder="Search "
            onChange={searchChangeHandler}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />

          {/* Suggestion Box */}
          {showSuggestions && searchSuggestions.length > 0 && (
            <ul className="m-auto mt-2 w-[600px] border border-gray-200 rounded-lg bg-white absolute top-full  left-0 right-0 shadow-lg overflow-auto max-h-[300px]">
              {searchSuggestions.map((result) => (
                <li key={result}>
                  <Link
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setSearchQuery(result);
                    }}
                    className="block border-bottom border-b-gray-200 cursor-pointer py-2 px-4 hover:bg-gray-200"
                    to={`/results?search_query=${result}`}>
                    {result}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          src="https://cdn-icons-png.flaticon.com/512/219/219959.png"
          alt="User Profile"
        />
      </div>
    </div>
  );
};

export default Head;
