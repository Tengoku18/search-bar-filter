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

export default function Home() {
  const [word, setWord] = useState("");
  const [input, setInput] = useState([data]);

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

  // useEffect(() => {
  //   handleChange();
  // }, []);

  return (
    <div className="text-lg text-center font-semibold">
      <h1>Search Filter </h1> <br />
      <input
        className="border-black px-2"
        type="text"
        placeholder="Zone"
        onChange={handleChange}
      />
      {input.map((value) => {
        return (
          <div key={value}>
            <h1>{value}</h1> <br />
          </div>
        );
      })}
    </div>
  );
}
