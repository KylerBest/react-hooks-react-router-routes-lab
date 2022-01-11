import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(m => 
    <div style={{
      background: "#C0D1DE",
      borderRadius: "4px", 
      padding: "5px", 
      margin: "5px"
    }} key={m.title}>

      <p>Title: {m.title}</p>
      <p>Time: {m.time}</p>
      <p>Genres: </p>
      <ul>
        {m.genres.map(g => <li key={g}>{g}</li>)}
      </ul>

    </div>)}
  </div>;
}

export default Movies;
