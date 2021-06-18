import React, { useState, useEffect } from "react";

const Test = () => {
  const [msg, setMsg] = useState("hello");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    return () => {};
  }, [count]);
  return (
    <div>
      <h1>{msg}</h1>
      <button
        onClick={(e) => {
          setCount(count + 1);
          setMsg("bye");
        }}
      >
        click
      </button>
    </div>
  );
};

export default Test;
