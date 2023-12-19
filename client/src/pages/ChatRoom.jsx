import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { APIrequest } from "../Store/apiSlice";
import c from "../const";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

import SpotifyDashboard from "./SpotifyDashboard";
const code = new URLSearchParams(window.location.search).get("code");

export default function ChatRoom() {
    //   const { id } = useParams();
    const id = 1; // Temp hard code room - later from btn
    const socket = io.connect(c.localBaseUrl); // c.AmenhotepBaseUrl (LIVE)
    useEffect(() => {
        // Establish a WebSocket connection to your backend
        socket.emit("join_room", +id);
    }, []);

    const dispatch = useDispatch();
    const [chats, setChats] = useState([]); // all chats db
    const [message, setMessage] = useState(""); // input

    // Define callback function
    const handleApiRequestComplete = (data, error) => {
        if (data) {
            // Handle success
            setChats(data.chats);
            socket.emit(
                "send_message",
                (data = { chats: data.chats, room: +id })
            );
        } else {
            // Handle error
        }
    };
    // TEMP POST CHATROOM
    const handleApiRequestCompletePOSTCHATROOM = (data, error) => {
        if (data) {
            // Handle success
        } else {
            // Handle error
        }
    };
    // TEMP REGISTER
    const handleApiRequestCompleteREGISTER = (data, error) => {
        if (data) {
            // Handle success
        } else {
            // Handle error
        }
    };
    // TEMP LOGIN
    const handleApiRequestCompleteLOGIN = (data, error) => {
        if (data) {
            // Handle success
            localStorage.setItem("token", data.token);
        } else {
            // Handle error
        }
    };

    useEffect(() => {
        socket.on(
            "receive_message",
            (chats) => {
                setChats(chats);
            },
            [socket]
        );
    });

    const onPostChatComplete = (data, error) => {
        if (data) {
            // Handle success
            // GET Chat - Bearer token needed
            dispatch(
                APIrequest({
                    method: "GET",
                    apiEndpoint: `${c.localBaseUrl}/chat/${+id}`,
                    options: {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                    },
                    callbackArray: [handleApiRequestComplete],
                })
            );
        } else {
            // Handle error
            // (nothing specific to do in this case)
        }
    };

    // Function to handle message submission
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            APIrequest({
                method: "POST",
                apiEndpoint: `${c.localBaseUrl}/chat`,
                options: {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                    data: {
                        chat_room_id: +id,
                        message: message,
                    },
                },
                callbackArray: [onPostChatComplete],
            })
        );

        // Clear the message input after submission
        setMessage("");
    };

    useEffect(() => {
        // temp make chat room id 1
        dispatch(
            APIrequest({
                method: "POST",
                apiEndpoint: `${c.localBaseUrl}/chatRoom`,
                options: {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                    data: {
                        name: "Test Chat Room",
                    },
                },
                callbackArray: [handleApiRequestCompletePOSTCHATROOM],
                // updateContentOnSuccess: true,
            })
        );
        // temp register
        dispatch(
            APIrequest({
                method: "POST",
                apiEndpoint: `${c.localBaseUrl}/user/register`,
                options: {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                    data: {
                        email: "email@mail.com",
                        password: "12345",
                        username: "Emily",
                    },
                },
                callbackArray: [handleApiRequestCompleteREGISTER],
                // updateContentOnSuccess: true,
            })
        );
        // temp register + login
        dispatch(
            APIrequest({
                method: "POST",
                apiEndpoint: `${c.localBaseUrl}/user/login`,
                options: {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                    data: {
                        email: "email@mail.com",
                        password: "12345",
                        username: "Emily",
                    },
                },
                callbackArray: [handleApiRequestCompleteLOGIN],
            })
        );
        // GET Chat - Bearer token needed
        dispatch(
            APIrequest({
                method: "GET",
                apiEndpoint: `${c.localBaseUrl}/chat/${+id}`,
                options: {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                },
                callbackArray: [handleApiRequestComplete],
            })
        );
    }, [dispatch]);

    // Use params to get the room title
    // const chatRoomTitle = chatRoomTitles[+id];

    return (
        <div>
            {code ? (
                <SpotifyDashboard code={code} />
            ) : (
                <a
                    className="btn m"
                    href={
                        "https://accounts.spotify.com/authorize?client_id=c427c4dced8b46f092bea016eb4ab5a0&response_type=code&redirect_uri=http://localhost:5173/homepage&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
                    }
                >
                    Login With Spotify
                </a>
            )}
            {/* <h1>{chatRoomTitle}</h1> */}
            {chats.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    <ul>
                        {chats.map((chat) => (
                            <li key={chat.id}>
                                <div>
                                    <strong>{chat.User.username}:</strong>{" "}
                                    {chat.message}
                                </div>
                                <div>
                                    Sent at:{" "}
                                    {new Date(chat.createdAt).toLocaleString()}
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {/* Form for posting messages */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">New Message:</label>
                <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
