import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <div>
      <h1>Actors Page</h1>
      </div>

      <div>
        <div>
          {actors.map((actor, index) => (
            <div>
              <div>
              <h2>{actor.name}</h2>
              </div>
          
          
              <div>
                {actor.movies.map((movie, index) => (
                  <ul>
                    <li>{movie}</li>
                  </ul>
                ))}
              </div>  
            </div>
          ))}
        </div>
      </div>
    </div>
  )}


export default Actors;
