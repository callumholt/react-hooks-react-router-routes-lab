import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return ( 
  <div>
      <h1>Directors Page</h1>
    <div>
      {directors.map((director, index) => (
          <div key={index}>
            <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
            ))}
          </ul>
          </div>
      ))}
    </div>
  </div>
  )}

export default Directors;
