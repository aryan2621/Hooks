import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import  MovieProvider  from "./MovieContext";
function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
