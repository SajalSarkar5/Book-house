import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyPadingWork = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([]);

    const [loder, setLoader] = useState(false)




    const email = user.email;
    useEffect(() => {
        if (email) {
            axios.get(`https://backend-nine-umber.vercel.app/mypainding?email=${email}`, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                    setUsers(res.data)
                })
        }
    }, [loder])


    const handelChange = (e, item) => {
        setLoader(false)
        axios.patch(`https://backend-nine-umber.vercel.app/handelStatus/${item._id}`, { e })
            .then(res => {
                setLoader(true)
            })
    }


    console.log(users)
    return (
        <div className='flex justify-center items-center my-14'>

            {
                users?.length > 0 ? <div>
                    {
                        users && <div>
                            {
                                users?.map((item, i) => {
                                    return <div className='mb-10' key={i}>

                                        <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="" />
                                            <div class="flex flex-col justify-between p-4 leading-normal">
                                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Name : </span><span className='text-lg'>{item.name}</span></h5>
                                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Type : </span><span className='text-lg'>{item.type}</span></h5>
                                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Area : </span><span className='text-lg'>{item.area}</span></h5>
                                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><span>Price : $</span><span className='text-lg'>{item.price}</span></h5>
                                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><span>Discription : </span><span>{item.discription}</span></p>
                                            </div>
                                            <select onChange={(e) => handelChange(e.target.value, item)} defaultValue={item?.status} name="select" id="">
                                                <option value="painding">Painding</option>
                                                <option value="complete">Complete</option>
                                                <option value="inprogress">Inprogress</option>
                                            </select>
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                    }
                </div> : <div className='flex items-center justify-center h-screen w-full'><p className='text-2xl'>No Booking Here</p></div>
            }






        </div>
    );
};

export default MyPadingWork;