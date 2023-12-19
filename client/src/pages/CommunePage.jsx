import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CommunePage = () => {
    const [headlines, setHeadlines] = useState([]);

    const getHeadlines = async () => {
        try {
            const { data } = await axios.get(
                "https://newsapi.org/v2/everything?q=anime&pageSize=10&page=1&apiKey=7288b0143d664745b3c6c0a004fe780f"
            );

            setHeadlines(data.articles);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getHeadlines();
    }, []);

    return (
        <>
            {headlines.map((headline, index) => {
                return (
                    <div className="rooms-card" key={index}>
                        <img src={headline?.urlToImage} alt="" />
                        <Link>
                            <button>{headline?.title}</button>
                        </Link>
                        <h2>{headline?.description}</h2>
                    </div>
                );
            })}

            {/* {DetailedCard- to be populated with data} */}
            <div className="DetailedCard">
                <p>Headline</p>
                <p>Author</p>
                <p>Description</p>
                <p>Url</p>
                <p>Image</p>
            </div>
        </>
    );
};

export default CommunePage;
