import React, { useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";

const SearchIcons = () => {
  const listItems = [
    "Apple",
    "Banana",
    "Orange",
    "Bike",
    "Car",
    "Plane",
    "Cycle",
    "Potato",
  ];
  const [word, setWord] = useState("");
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    const searchWord = e.target.value;
    console.log("typing", searchWord);
    setWord(searchWord);
    const filteredData = listItems.filter((item) => {
      if (item.toLowerCase().includes(searchWord.toLowerCase())) {
        return item;
      }
    });

    setInput(filteredData);
  };

  const [state, setState] = useState(false);
  const [inputText, setInputText] = useState(false);

  const handleSearch = () => {
    setState(true);
  };

  return (
    <>
      <div className=" flex bg-slate-300 h-screen items-center justify-center  ">
        <div className=" relative h-12">
          <button
            className=" bg-slate-400 text-white rounded-full p-1 transition ease-in-out hover: -translate-y-1 hover:p-2 hover:bg-blue-400   "
            type="submit"
            onClick={handleSearch}
          >
            <SearchIcon className="h-8 w-8" />
          </button>
          {state === true && (
            <div className="absolute -top-1 left-0 w-auto flex py-0.5 px-3 h-fit rounded-full -translate-x-60 bg-white">
              <input
                onClick={() => {
                  setInputText(true);
                }}
                type="text"
                placeholder="Search on List  "
                className=" h-10 relative  focus:outline-none"
                onChange={handleChange}
              />
              <button
                type="button"
                className="border-none"
                onClick={() => {
                  setState(false);
                  setInputText(false);
                }}
              >
                <XIcon className="h-6 w-6 text-gray-500" />
              </button>
              {inputText === true && (
                <div className="absolute top-12 w-52  max-h-fit bg-white rounded-md">
                  {" "}
                  <ul className="text-gray-400 px-4 py-2 ">
                    {input.map((item) => {
                      return (
                        <div key={item.index}>
                          <li className="cursor-pointer">{item} </li>
                        </div>
                      );
                    })}
                  </ul>{" "}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchIcons;
