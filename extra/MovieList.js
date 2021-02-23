import React, { useContext, useState } from "react";
// import Movie from "./Movie";
import MovieContext from './MovieContext'
function MovieList() {
  const value =useContext(MovieContext)

  return (
    <div>
     <h1>{value}</h1>
    </div>
  );
}

export default MovieList;
