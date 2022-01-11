import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map(d => 
    <div
    style={{
      background: "#C0D1DE",
      borderRadius: "4px", 
      padding: "5px", 
      margin: "5px"
    }} key={d.name}>
      <p>Name: {d.name}</p>
      <p>Movies: </p>
      <ul>
        {d.movies.map(m => <li key={m}>{m}</li>)}
      </ul>
    </div>)}
  </div>;
}

export default Directors;
