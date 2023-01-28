import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return ( 
  <div>
    <div>
      <h1>Directors Page</h1>
    </div>
    <div>
      {directors.map((director, index) => (
        <div>
          <div>
            <h2>{director.name}</h2>
          </div>
          
          <div>
            {director.movies.map((movie, index) => (
              <ul>
                <li>{movie}</li>
              </ul>
            ))}
          </div>

        </div>
      ))}
    </div>
  </div>
  )}

export default Directors;
