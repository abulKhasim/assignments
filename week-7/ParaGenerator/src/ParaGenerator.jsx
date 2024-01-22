import React from "react";
import { useState } from "react";
import "./ParaGenerator.css";

const ParaGenerator = () => {
  const [length, setLength] = useState("");
  const [para, setPara] = useState("");

  const words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ];

  function generatePara() {
    if (!isNaN(length) && length > 0) {
      let generatedPara = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        generatedPara += words[randomIndex];
        generatedPara += " ";
      }
      setPara(generatedPara);
    } else {
      setPara("Please enter a valid positive number for word length.");
    }
  }

  return (
    <div>
      <h1>Para Generator</h1>
      <div id="input-div">
        <input
          type="number"
          id="wordLength"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <button onClick={generatePara}>Generate</button>
      </div>
      <p>{para}</p>
    </div>
  );
};

export default ParaGenerator;
