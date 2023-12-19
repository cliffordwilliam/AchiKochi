import { Link } from "react-router-dom";
const Parent = () => {
    return (
        <>
            <header>
                <h2 className="logo">あっちこっち</h2>
                <nav className="navigation">
                    <Link href="">Home</Link>
                    <Link href="">Post</Link>
                    <Link href="">Logout</Link>
                    <Link to={"/commune"}>CHATPAGE-DEVELOPMENT</Link>
                </nav>
            </header>

            <section className="parallax">
                <img src="assets/image/hill1.png" alt="hill1" id="hill1" />
                <img src="assets/image/hill2.png" alt="hill2" id="hill2" />
                <img src="assets/image/hill3.png" alt="hill3" id="hill3" />
                <img src="assets/image/hill4.png" alt="hill4" id="hill4" />
                <img src="assets/image/hill5.png" alt="hill5" id="hill5" />
                <img src="assets/image/tree.png" alt="tree" id="tree" />
                <h2 id="text">AcchiKochi | Weeb's Talk</h2>
                <img src="assets/image/leaf.png" alt="leaf" id="leaf" />
                <img src="assets/image/plant.png" alt="plant" id="plant" />
            </section>

            <section className="sec">
                <h2>AcchiKochi Group Project</h2>
                <p>
                    Best Weeb's Forum Website with Realtime Chatting and Best
                    Arts Post. <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi consectetur minus fugiat consequuntur quia explicabo
                    distinctio reprehenderit suscipit adipisci? Natus quas
                    repudiandae recusandae laboriosam fugit molestiae error
                    velit earum corrupti. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Impedit est ex quos totam eius
                    recusandae molestias eligendi iusto quis commodi quaerat
                    ipsum similique, nobis maiores tempore mollitia perspiciatis
                    eos. Dolorum! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Provident quas veritatis voluptatem
                    aspernatur dignissimos officia rem, sit quaerat, enim,
                    mollitia eveniet animi ad repellat consequatur similique
                    perferendis id numquam voluptate.
                </p>
            </section>

            <div className="credit">
                <span>AcchiKochi</span> | Weeb's Talk Forum Website
            </div>
        </>
    );
};

export default Parent;
