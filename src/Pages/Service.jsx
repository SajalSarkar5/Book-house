import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/allservices`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setServices(res.data)
            })

    }, [])
    console.log(services)
    return (
        <div>
            <div className='flex justify-center items-center my-10'>
                <div>
                    {
                        services?.map((item, i) => {
                            return <Link to={`/service/${item._id}`} key={i}>
                                
                                <div className="card w-96 bg-base-100 shadow-xl mb-12">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Name : <span className='text-lg'>{item.name}</span></h2>
                                        <div>
                                            <p className='text-xl font-medium'>Type : <span className='text-lg'>{item.type}</span></p>
                                        </div>
                                        <p className='text-xl font-medium'>Discription : <span className='text-base font-normal'>{item.discription}</span></p>
                                        
                                        <div>
                                            <p className='text-xl font-medium'>Price : $<span className='text-lg font-normal'>{item.price}</span></p>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0 text-[#cae9ff] capitalize">More Details</button>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;