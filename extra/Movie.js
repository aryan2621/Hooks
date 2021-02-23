import React from "react";

function Movie(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <br />
    </div>
  );
}

export default Movie;
