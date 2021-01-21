import React, { useState } from "react";
import "./styles.css";

var r = ["Asus ROG Zephyrus G14", "Alienware M15 R3", "MSI GS65 Stealth"];
var d = ["MacBook Pro", "Dell XPS 15 ", "Acer ConceptD 7"];
var c = [
  "Lenovo ThinkPad X1 Carbon (8th Gen)",
  "HP Elite Dragonfly",
  "Microsoft Surface Pro 7"
];

export default function App() {
  const [output, setoutput] = useState("");

  function gaming() {
    var output = "";
    output = r.map((item) => <li key={item}>{item}</li>);
    setoutput(output);
  }
  function videoedit() {
    var output = "";
    output = d.map((item) => <li key={item}>{item}</li>);
    setoutput(output);
  }
  function professional() {
    var output = "";
    output = c.map((item) => <li key={item}>{item}</li>);
    setoutput(output);
  }

  return (
    <div className="App">
      <style>{"body { background-color: #EC4899; }"}</style>
      <h2
        style={{
          padding: "0.5rem 1rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "#F5F3FF",
          color: "#4338CA"
        }}
      >
        Top Rated Laptops💻 based on category
      </h2>
      <button
        onClick={() => gaming()}
        style={{
          padding: "0.5rem 1rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "black",
          color: "#FBBF24"
        }}
      >
        Gaming
      </button>
      <button
        onClick={() => videoedit()}
        style={{
          padding: "0.5rem 1rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "black",
          color: "#FBBF24"
        }}
      >
        Video Editing
      </button>
      <button
        onClick={() => professional()}
        style={{
          padding: "0.5rem 1rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "black",
          color: "#FBBF24"
        }}
      >
        Professional
      </button>
      <div>
        <ul
          style={{
            listStyle: "none"
          }}
        >
          <li
            style={{
              margin: "auto",
              border: "3px solid white",
              padding: "1rem",
              borderRadius: "0.5rem",
              maxWidth: "80%",
              color: "#78350F"
            }}
          >
            {" "}
            <div
              style={{
                padding: "1rem",
                fontSize: "larger"
              }}
            >
              {output}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
