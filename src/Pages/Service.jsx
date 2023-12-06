import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([])
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false)
    useEffect(() => {
        axios.get(`https://backend-nine-umber.vercel.app/allservices`, { withCredentials: true })
            .then(res => {
                setServices(res.data)
            })

    }, [])

    return (
        <div>
            <div className='flex justify-center items-center my-10'>
                <div>
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-10' onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search Your Services' />

                    {
                        !show ? <div>
                            {
                                services?.filter((item) => {
                                    return search.toLowerCase() === '' ? item : (item.type.toLowerCase().includes(search) || item.type.toLowerCase().includes(search))
                                })
                                    .slice(0, 6).map((item, i) => {
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
                        </div> : <div>
                            {
                                services?.filter((item) => {
                                    return search.toLowerCase() === '' ? item : (item.type.toLowerCase().includes(search) || item.type.toLowerCase().includes(search))
                                })
                                    .map((item, i) => {
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
                    }

                </div>

            </div>
            {
                !show && <div onClick={() => setShow(true)} className='text-center'> <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0 text-[#cae9ff] capitalize ">See All</button></div>
            }
        </div>
    );
};

export default Service;