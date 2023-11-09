import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyPadingWork = () => {
    const { user } = useContext(AuthContext)

    const [users, setUsers] = useState([]);

    
    const email = user.email;
    useEffect(() => {
        if (email) {
            axios.get(`https://backend-nine-umber.vercel.app/mypainding?email=${email}`, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                    setUsers(res.data)
                })
        }

    }, [])
    console.log(email)
    return (
        <div>
            {
                users && <div>
                    {
                        users?.map((item, i) => {
                            return <div>

                                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="" />
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Name : </span><span className='text-lg'>{item.name}</span></h5>
                                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Type : </span><span className='text-lg'>{item.type}</span></h5>
                                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Area : </span><span className='text-lg'>{item.area}</span></h5>
                                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Price : $</span><span className='text-lg'>{item.price}</span></h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>Discription : </span><span>{item.discription}</span></p>
                                    </div>
                                    <Link to="/">
                                        <button className='btn text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 capitalize'>Go to Home</button>
                                    </Link>
                                </a>

                            </div>
                        })
                    }
                </div>
            }



        </div>
    );
};

export default MyPadingWork;