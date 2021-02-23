import React, { useState, useEffect } from "react";

function Useeffect() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);
  const [windows, setWindows] = useState(window.innerWidth);
  console.log("render");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("unmount");
  }, [resourceType]);

  const handleResize = () => {
    setWindows(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windows}
      {/* {resourceType}
      <br />

      <button type="submit" onClick={() => setResourceType("Posts")}>
        Posts
      </button>
      <button type="submit" onClick={() => setResourceType("Users")}>
        Users
      </button>
      <button type="submit" onClick={() => setResourceType("comments")}>
        Comment
      </button>
      {
          items.map(item=>{
              return <pre>{JSON.stringify(item)}</pre>
          })
      } */}
    </div>
  );
}

export default Useeffect;
