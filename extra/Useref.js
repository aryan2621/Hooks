import React, { useState, useEffect, useRef } from "react";

function Useref() {
  const [name, setName] = useState();
  //   const rendering =useRef(0)
  // useEffect(()=>{
  //     rendering.current=rendering.current+1
  // })
  const input = useRef();
  //   function focus() {
  //     input.current.focus();
  //   }

  const prevname = useRef("");

  useEffect(() => {
    prevname.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={input}
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      />
      {/* <button type="submit" onClick={focus}>
        Focus
      </button> */}
      {name}

      {/* <div>rendering:{rendering.current}</div> */}
    </div>
  );
}

export default Useref;
