
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APIrequest } from "./Store/apiSlice";
import c from "./const";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const id = 1; // Temp hard code room - later from btn
  const socket = io.connect(c.localBaseUrl); // c.AmenhotepBaseUrl (LIVE)
  useEffect(() => {
    // Establish a WebSocket connection to your backend
    socket.emit("join_room", +id);
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
