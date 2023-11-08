import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/allservices`)
            .then(res => {
                setServices(res.data)
            })

    }, [])
    return (
        <div>
            <Header></Header>

            <div className='flex justify-center items-center'>

                <div>
                    {
                        services?.map((item, i) => {
                            return <Link to={`/service/${item._id}`} key={i}>
                                {/* {item._id} */}
            
                                <div class="w-full max-w-sm bg-[#0d3b66] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-2">
                                    <a href="#">
                                        <img class="p-3 w-full rounded-t-lg" src={item.image} alt="product image" />
                                    </a>
                                    <div class="px-5 pb-5">
                                        <a href="#">
                                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"><span className='text-xl'>Name : </span>{item.name} </h5>
                                        </a>
                                        <div>
                                            <a href="#">
                                                <h5 class="text-xl font-medium tracking-tight text-gray-900 dark:text-white"><span className='text-xl'>Area : </span><span className='text-lg'>{item.area} </span></h5>
                                            </a>
                                        </div>
                                        <div>
                                            <h3 className='text-xl'><span className='text-xl font-medium'>Discription: <span className='text-base font-normal'>{item.discription}</span></span></h3>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-xl font-medium dark:text-white">Price: <span className='text-base font-normal'>${item.price}</span></span>

                                            <Link to={`/service/${item._id}`}><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>More details</button></Link>
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