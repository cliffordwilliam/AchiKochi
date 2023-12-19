import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import c from "../const";
import { APIrequest } from "../Store/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import SpotifyDashboard from "./SpotifyDashboard";
const code = new URLSearchParams(window.location.search).get("code");

const MockChatRoom = () => {
    const dispatch = useDispatch();
    const socket = io.connect(c.localBaseUrl);
    const [chatRooms, setChatRooms] = useState([]);
    const [message, setMessage] = useState("");
    const [roomName, setRoomName] = useState("");
    const [roomId, setRoomId] = useState(21);
    const [chats, setChats] = useState([]); // all chats db
    const [headlines, setHeadlines] = useState([]);
    console.log(headlines, `HHH`);

    //fetch chatroom from database
    const fetchRoomfromDB = async () => {
        try {
            const { data } = await axios.get(`${c.localBaseUrl}/chatRoom`);
            setChatRooms(data.chatRooms);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchAPIHeadlines = async () => {
        try {
            const { data } = await axios.get(
                "https://newsapi.org/v2/everything?q=anime&pageSize=2&page=3&apiKey=7288b0143d664745b3c6c0a004fe780f"
            );
            setHeadlines(data.articles);
        } catch (error) {
            console.log(error);
        }
    };

    const handleApiRequestCompletePOSTCHATROOM = (data, error) => {
        if (data) {
            // Handle success
        } else {
            // Handle error
        }
    };

    const postRoomAPI = async (headline) => {
        try {
            dispatch(
                APIrequest({
                    method: "POST",
                    apiEndpoint: `${c.localBaseUrl}/chatRoom`,
                    options: {
                        headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                        },
                        data: {
                            name: headline,
                        },
                    },
                    callbackArray: [handleApiRequestCompletePOSTCHATROOM],
                    // updateContentOnSuccess: true,
                })
            );
        } catch (error) {
            console.log(error, `DARI MAPPING API`);
        }
    };

    const mapAPI = () => {
        headlines.map((el) => {
            return postRoomAPI(el.title);
        });
    };

    useEffect(() => {
        fetchRoomfromDB();
        fetchAPIHeadlines();
        mapAPI();
    }, []);
    //fetch news api 1, create new room

    //when clicked, joined a group.
    const handleJoinRoom = (id, name) => {
        socket.emit("join_room", +id);
        setRoomName(name);
        setRoomId(id);
    };

    //fetch Chats from a room
    const handleApiRequestComplete = (data, error) => {
        if (data) {
            // Handle success
            setChats(data.chats);
            socket.emit(
                "send_message",
                (data = { chats: data.chats, room: roomId })
            );
        } else {
            // Handle error
        }
    };
    const onPostChatComplete = (data, error) => {
        if (data) {
            // Handle success
            // GET Chat - Bearer token needed
            dispatch(
                APIrequest({
                    method: "GET",
                    apiEndpoint: `${c.localBaseUrl}/chat/${roomId}`,
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

    //shows all the chat within a room
    const fetchChats = async () => {
        try {
            const { data } = await axios.get(
                `${c.localBaseUrl}/chat/${roomId}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            );

            setChats(data.chats);
            socket.emit(
                "send_message",
                (data = { chats: data.chats, room: roomId })
            );
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchChats();
    }, [roomId]);

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
                        chat_room_id: roomId,
                        message: message,
                    },
                },
                callbackArray: [onPostChatComplete],
            })
        );

        // Clear the message input after submission
        setMessage("");
    };

    return (
        <>
            <body>
                <header>
                    <h2 className="logo">あっちこっち</h2>
                    <nav className="navigation">
                        <a href="">Home</a>
                        <a href="">Login</a>
                        <a href="">Register</a>
                        <a href="">Post</a>
                        <a href="">Logout</a>
                    </nav>
                </header>

                <section className="parallax">
                    <img
                        src="https://ik.imagekit.io/hohoho/hill1.png?updatedAt=1702982737950"
                        alt="hill1"
                        id="hill1"
                    />
                    <img
                        src="https://ik.imagekit.io/hohoho/hill2.png?updatedAt=1702982738062"
                        alt="hill2"
                        id="hill2"
                    />
                    <img
                        src="https://ik.imagekit.io/hohoho/hill3.png?updatedAt=1702984518141"
                        alt="hill3"
                        id="hill3"
                    />
                    <img
                        src="https://ik.imagekit.io/hohoho/hill4.png?updatedAt=1702984518181"
                        alt="hill4"
                        id="hill4"
                    />
                    <img
                        src="https://ik.imagekit.io/hohoho/hill5.png?updatedAt=1702984518182"
                        alt="hill5"
                        id="hill5"
                    />
                    <img
                        src="https://ik.imagekit.io/hohoho/tree.png?updatedAt=1702984517990"
                        alt="tree"
                        id="tree"
                    />
                    <h2 id="text">AcchiKochi | Weeb's Talk</h2>
                    <img
                        src="https://ik.imagekit.io/hohoho/leaf.png?updatedAt=1702984518161"
                        alt="leaf"
                        id="leaf"
                    />
                    <img
                        src="https://ik.imagekit.io/hohoho/plant.png?updatedAt=1702984518152"
                        alt="plant"
                        id="plant"
                    />
                </section>

                <section className="sec">
                    <h2>AcchiKochi Group Project</h2>
                    <p>
                        Best Weeb's Forum Website with Realtime Chatting and
                        Best Arts Post. <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Modi consectetur minus fugiat consequuntur quia
                        explicabo distinctio reprehenderit suscipit adipisci?
                        Natus quas repudiandae recusandae laboriosam fugit
                        molestiae error velit earum corrupti. Lorem ipsum dolor
                        sit, amet consectetur adipisicing elit. Impedit est ex
                        quos totam eius recusandae molestias eligendi iusto quis
                        commodi quaerat ipsum similique, nobis maiores tempore
                        mollitia perspiciatis eos. Dolorum! Lorem ipsum dolor
                        sit, amet consectetur adipisicing elit. Provident quas
                        veritatis voluptatem aspernatur dignissimos officia rem,
                        sit quaerat, enim, mollitia eveniet animi ad repellat
                        consequatur similique perferendis id numquam voluptate.
                    </p>
                </section>

                <div className="credit">
                    <span>AcchiKochi</span> | Weeb's Talk Forum Website
                </div>

                <section className="chat-box">
                    <div className="container">
                        <div className="leftside">
                            <div className="header">
                                <div className="roomImg">
                                    <img
                                        src="assets/image/female1.png"
                                        alt=""
                                        className="cover"
                                    />
                                </div>
                                <ul className="nav-icons">
                                    <li>
                                        <i className="fa-regular fa-circle-xmark"></i>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-comment"></i>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-bars"></i>
                                    </li>
                                </ul>
                            </div>
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
                            </div>
                            <div className="search-chat">
                                <div>
                                    <input type="text" placeholder="search" />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="chatlist">
                                {chatRooms.map((room) => {
                                    return (
                                        <Link
                                            key={room.id}
                                            onClick={() =>
                                                handleJoinRoom(
                                                    room.id,
                                                    room.name
                                                )
                                            }
                                        >
                                            <div className="block">
                                                <div className="imgbx">
                                                    <img
                                                        // src={el?.urlToImage}
                                                        alt=""
                                                        className="cover"
                                                    />
                                                </div>
                                                <div className="details">
                                                    <div className="listhead">
                                                        <h4>{room?.name}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="rightside">
                            {/* <div className="header">
                                <div className="imgtext">
                                    <img
                                        src="https://media.discordapp.net/attachments/1154740258173370372/1186236859274240150/animegenius_73a2183ef143f2154fbe076510cc96fb.png?ex=6592842a&is=65800f2a&hm=e9325b7a6658b8bbdd70ac78fbdd290a89c9c7ebe8c4a3ca4520472814348dc3&=&format=webp&quality=lossless&width=1024&height=1024"
                                        alt=""
                                        className="cover"
                                    />
                                </div>
                                <div className="category">
                                    <h1>{roomName}</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Porro numquam
                                        distinctio quibusdam blanditiis nihil,
                                        labore ratione fugiat dolores ad,
                                        commodi nobis officia delectus beatae
                                        rerum molestias natus dolore alias
                                        cupiditate.
                                    </p>
                                </div>
                            </div> */}
                            {chats.length === 0 ? (
                                <p>Start Chat Now</p>
                            ) : (
                                <>
                                    <ul>
                                        {chats.map((chat) => (
                                            <li key={chat.id}>
                                                <div>
                                                    <strong>
                                                        {chat.User.username}:
                                                    </strong>{" "}
                                                    {chat.message}
                                                </div>
                                                <div>
                                                    Sent at:{" "}
                                                    {new Date(
                                                        chat.createdAt
                                                    ).toLocaleString()}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className="message-input">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="message">New Message:</label>
                                <input
                                    className=" bg-red-200 w-[5rem] h-[10rem]"
                                    type="text"
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* <!-- Script --> */}
            </body>
        </>
    );
};

export default MockChatRoom;
