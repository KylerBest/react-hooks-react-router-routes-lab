import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(a => 
    <div
    style={{
      background: "#C0D1DE",
      borderRadius: "4px", 
      padding: "5px", 
      margin: "5px"
    }} key={a.name}>
      <p>Name: {a.name}</p>
      <p>Movies:</p>
      <ul>
        {a.movies.map(m => <li key={m}>{m}</li>)}
      </ul>
    </div>)}
  </div>;
}

export default Actors;
