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
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
    const id = 1; // Temp hard code room - later from btn
    const socket = io.connect(c.localBaseUrl); // c.AmenhotepBaseUrl (LIVE)
    useEffect(() => {
        // Establish a WebSocket connection to your backend
        socket.emit("join_room", +id);
    }, []);

    async function onScroll() {
        let text = document.getElementById("text");
        let leaf = document.getElementById("leaf");
        let hill1 = document.getElementById("hill1");
        let hill4 = document.getElementById("hill4");
        let hill5 = document.getElementById("hill5");

        window.addEventListener("scroll", () => {
            let value = window.scrollY;

            text.style.marginTop = value * 2.5 + "px";
            leaf.style.top = value * -1.5 + "px";
            leaf.style.left = value * 1.5 + "px";
            hill5.style.left = value * 1.5 + "px";
            hill4.style.left = value * -1.5 + "px";
            hill1.style.top = value * 1 + "px";
        });
    }

    useEffect(() => {
        onScroll();
    });

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
