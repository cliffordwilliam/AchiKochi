const MockChatRoom = () => {
    const img =
        "https://ik.imagekit.io/hohoho/hill1.png?updatedAt=1702982737950";
    return (
        <>
            <body>
                {/* <img src={img} alt="hill3" id="hill3" /> */}
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

                <section class="parallax">
                    <img
                        src="./assets/image/hill1.png"
                        alt="hill1"
                        id="hill1"
                    />
                    <img
                        src="./assets/image/hill2.png"
                        alt="hill2"
                        id="hill2"
                    />
                    <img
                        src="./assets/image/hill3.png"
                        alt="hill3"
                        id="hill3"
                    />
                    <img
                        src="./assets/image/hill4.png"
                        alt="hill4"
                        id="hill4"
                    />
                    <img
                        src="./assets/image/hill5.png"
                        alt="hill5"
                        id="hill5"
                    />
                    <img src="./assets/image/tree.png" alt="tree" id="tree" />
                    <h2 id="text">AcchiKochi | Weeb's Talk</h2>
                    <img src="./assets/image/leaf.png" alt="leaf" id="leaf" />
                    <img
                        src="./assets/image/plant.png"
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
                            <div className="search-chat">
                                <div>
                                    <input type="text" placeholder="search" />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="chatlist">
                                <div className="block">
                                    <div className="imgbx">
                                        <img
                                            src="https://media.discordapp.net/attachments/1154740258173370372/1186236859274240150/animegenius_73a2183ef143f2154fbe076510cc96fb.png?ex=6592842a&is=65800f2a&hm=e9325b7a6658b8bbdd70ac78fbdd290a89c9c7ebe8c4a3ca4520472814348dc3&=&format=webp&quality=lossless&width=1024&height=1024"
                                            alt=""
                                            className="cover"
                                        />
                                    </div>
                                    <div className="details">
                                        <div className="listhead">
                                            <h4>Anime Chill and RPG Talks</h4>
                                        </div>
                                        <div className="message-p">
                                            <p>
                                                Place where we chill and talk
                                                more about anime info
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img
                                            src="https://media.discordapp.net/attachments/1154740258173370372/1186236859609796658/animegenius_2e572f5dca771f6ff569bfd3c1c66db0.png?ex=6592842a&is=65800f2a&hm=43af5b4b5fade588567474cf95f58201e8280bef92ddbe87b899799005ae6257&=&format=webp&quality=lossless&width=1024&height=1024"
                                            alt=""
                                            className="cover"
                                        />
                                    </div>
                                    <div className="details">
                                        <div className="listhead">
                                            <h4>Manga Only Talks</h4>
                                        </div>
                                        <div className="message-p">
                                            <p>Karbit dilarang masuk</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="imgbx">
                                        <img
                                            src="https://media.discordapp.net/attachments/1154740258173370372/1186236860364750849/animegenius_548cfa1bd365157e37af10c26cbea725.png?ex=6592842a&is=65800f2a&hm=07030477c41749de92ab0d31486059f78e61d64ce9434169ecdb12e7295697c4&=&format=webp&quality=lossless&width=1024&height=1024"
                                            alt=""
                                            className="cover"
                                        />
                                    </div>
                                    <div className="details">
                                        <div className="listhead">
                                            <h4>Waifu Talks</h4>
                                        </div>
                                        <div className="message-p">
                                            <p>Furry Solid Solid Solid</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightside">
                            <div className="header">
                                <div className="imgtext">
                                    <img
                                        src="https://media.discordapp.net/attachments/1154740258173370372/1186236859274240150/animegenius_73a2183ef143f2154fbe076510cc96fb.png?ex=6592842a&is=65800f2a&hm=e9325b7a6658b8bbdd70ac78fbdd290a89c9c7ebe8c4a3ca4520472814348dc3&=&format=webp&quality=lossless&width=1024&height=1024"
                                        alt=""
                                        className="cover"
                                    />
                                </div>
                                <div className="category">
                                    <h1>Anime</h1>
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
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Script --> */}
            </body>
        </>
    );
};

export default MockChatRoom;
