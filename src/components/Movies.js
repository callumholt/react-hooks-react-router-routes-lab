import React from "react";
import { movies } from "../data";

function Movies() {
  return ( 
  <div>
    <div>
      <h1>Movies Page</h1>
    </div>
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <div key={index}>
                <li>{genre}</li>
              </div>
            ))}
          </ul>
          </div>
      ))}
    </div>
  </div>
)}

export default Movies;
