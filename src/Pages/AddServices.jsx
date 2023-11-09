import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AddServices = () => {
    const { user } = useContext(AuthContext)

    const [myService, setMyService] = useState([]);

    const email = user.email


    useEffect(() => {
        if (email) {
            axios.get(`http://localhost:3000/myservices?email=${email}`)
                .then(res => {
                    console.log(res.data)
                    setMyService(res.data)
                })
        }
    }, [])


    return (
        <div className="flex justify-center items-center gap-6 my-16">
            {
                myService && <div>
                    {
                        myService?.map((item, i) => {
                           return <div key={i}
                                class="block w-96 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-12">
                                <a href="#!">
                                    <img
                                        class="rounded-t-lg"
                                        src={item.image}
                                        alt="" />
                                </a>
                                <div class="p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        <span>Name : </span> <span className="text-lg">{item.userName}</span>
                                    </h5>
                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        <span>Type : </span> <span className="text-lg">{item.type}</span>
                                    </h5>
                                    <h5
                                        class="mb-2 text-xl leading-tight text-neutral-800 dark:text-neutral-50">
                                        <span className="font-medium">Area : </span> <span className="text-base font-medium">{item.area}</span>
                                    </h5>
                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        <span className="mb-2 text-xl font-medium leading-tight text-neutral-800">Discription : </span> <span>{item.discription}</span>
                                    </p>
                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        <span className="mb-2 text-xl font-medium leading-tight text-neutral-800">Price : $</span><span>{item.price}</span>
                                    </p>
                                    <button
                                        type="button"
                                        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Button
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </div>
            }


        </div>
    );
};

export default AddServices;