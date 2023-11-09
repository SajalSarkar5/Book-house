import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const Mybookings = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const email = user.email;
    console.log(email)
    useEffect(() => {
        if (email) {
            axios.get(`http://localhost:3000/mybooking?email=${email}`, { withCredentials: true })
                .then(res => {
                    setUsers(res.data)
                })
        }

    }, [user])
    return (
        <div>
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
                                <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                                    startups
                                </h6>
                                <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Lyft launching cross-platform service this week
                                </h4>
                                <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                                    Like so many organizations these days, Autodesk is a company in
                                    transition. It was until recently a traditional boxed software company
                                    selling licenses. Yet its own business model disruption is only part of
                                    the story
                                </p>
                                <a class="inline-block" href="#">
                                    <button
                                        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                    >
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            class="w-4 h-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            ></path>
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>


                    </div>
                })
            }
        </div>
    );
};

export default Mybookings;