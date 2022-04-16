import React from "react";
import { useState, useEffect } from "react";

const data = [
  " Mechi ",
  " Kosi ",
  "Sagarmatha ",

  " Janakpur ",
  " Bagmati",
  " Narayani ",

  " Gandaki",
  " Lumbini",
  "Dhaulagiri",

  "Rapti ",
  " Karnali ",
  " Bheri",

  "Seti ",
  " Mahakali",
];

const Search = () => {
  const [word, setWord] = useState("");
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    const searchWord = e.target.value;
    console.log("typing", searchWord);
    setWord(searchWord);
    const filteredData = data.filter((item) => {
      if (item.toLowerCase().includes(searchWord.toLowerCase())) {
        return item;
      }
    });
    console.log("data", filteredData);
    setInput(filteredData);
  };
  return (
    <>
      <div className="text-lg text-center font-semibold bg-amber-200 h-screen">
        <h1>Search Filter </h1> <br />
        <input
          className="border-black px-2"
          type="text"
          placeholder="Zone"
          onChange={handleChange}
        />
        <div className="bg-amber-100">
          {input.map((value) => {
            return (
              <div key={value}>
                <h1>{value}</h1> <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
