import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = () => {

    const [cardImage, setCardImage] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/services`, { withCredentials: true })
            .then(res => {
                setCardImage(res.data)
            })
    }, [])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    cardImage.map((card, i) => {
                        return <Link to={`/service/${card._id}`} key={i}>
                            <div className="card bg-base-100 shadow-xl image-full">
                                <figure>
                                    <div className="h-[300px]">
                                        <img className="w-full" src={card.image} alt="" />
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{card.brand}</h2>
                                </div>
                            </div>
                        </Link>
                    })
                }

            </div>
            <div className="text-center">
                <Link to="/service"><button className="btn text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 capitalize">See More</button> </Link>
            </div>
        </div>
    );
};

export default Card;