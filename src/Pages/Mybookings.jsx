import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Mybookings = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const email = user.email;
    console.log(email)
    useEffect(() => {
        if (email) {
            axios.get(`https://backend-nine-umber.vercel.app/mybooking?email=${email}`, { withCredentials: true })
                .then(res => {
                    setUsers(res.data)
                })
        }

    }, [user])
    return (
        <div className='flex justify-center items-center my-14'>
            {
                users?.map((item, i) => {
                    return <div key={i}>

                        <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                                <img
                                    src={item.image}
                                    alt="image"
                                    class="object-cover w-full h-full"
                                />
                            </div>
                            <div class="p-6">
                                <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal ">
                                    <span>Name : </span><span className='text-lg font-medium'>{item.name}</span>
                                </h6>
                                <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Type : <span className='text-lg font-medium'>{item.type}</span>
                                </h4>
                                <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Area : <span className='text-lg font-medium'>{item.area}</span>
                                </h4>
                                <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                    <span className='text-lg font-medium'>Discription : </span> <span>{item.discription}</span>
                                </p>
                                <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                    <span className='text-lg font-medium'>Price : </span> $<span>{item.price}</span>
                                </p>
                                <Link to="/">
                                    <button className='btn text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 capitalize'>Go to Home</button>
                                </Link>
                            </div>
                        </div>


                    </div>
                })
            }
        </div>
    );
};

export default Mybookings;