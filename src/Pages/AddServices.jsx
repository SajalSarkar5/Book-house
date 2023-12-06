import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const AddServices = () => {
    const { user } = useContext(AuthContext)

    const [myService, setMyService] = useState([]);
    const [loader, setLoader] = useState(false)
    const [defaultValue, setDefaultValue] = useState({})

    const email = user.email


    useEffect(() => {
        if (email) {
            axios.get(`https://backend-nine-umber.vercel.app/myservices?email=${email}`)
                .then(res => {
                    console.log(res.data)
                    setMyService(res.data)
                })
        }
    }, [loader])

    const handelDelete = (item) => {
        setLoader(false)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://backend-nine-umber.vercel.app/deleteservice/${item._id}`,)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        setLoader(true)

                    })
            }
        });
    }
    const handelEdit = (item) => {
        document.getElementById('my_modal_4').showModal()
        setDefaultValue(item)

    }

    const handelUpded = (e) => {
        setLoader(false)
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const area = e.target.area.value;
        const type = e.target.country.value;
        const price = e.target.price.value;
        const discription = e.target.description.value;
        const userEmail = user.email;
        const userName = user.displayName;
        const data = { name, image, type, price, area, discription, userEmail, userName }

        axios.put(`https://backend-nine-umber.vercel.app/updateservice/${defaultValue._id}`, data)
            .then(res => {
                setLoader(true)
                document.getElementById('my_modal_4').close()
                Swal.fire({
                    title: "Good job!",
                    text: "Update sucessfully!",
                    icon: "success"
                });
            })



    }





    return (


        <>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    <div>
                        <h1 className="text-center text-black text-5xl">Add service</h1>
                        <div className="my-6">
                            <hr />
                        </div>

                        <form onSubmit={handelUpded}>
                            <div class="space-y-12">
                                <div class="border-b border-gray-900/10 pb-12">
                                    <div>
                                        <div className="flex justify-start items-center gap-6">
                                            <div className="avatar">
                                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL} />
                                                </div>
                                            </div>
                                            <div>
                                                <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                            </div>
                                        </div>

                                    </div>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="sm:col-span-4">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Service Name</label>
                                            <div class="mt-2">
                                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input defaultValue={defaultValue?.name} type="text" name="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter Service Name" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Service Area</label>
                                            <div class="mt-2">
                                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input defaultValue={defaultValue?.area} type="text" name="area" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter Service Area" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Service Image</label>
                                            <div class="mt-2">
                                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <input defaultValue={defaultValue?.image} type="text" name="image" id="image" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter image url" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="border-b border-gray-900/10 pb-12">


                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">




                                        <div class="sm:col-span-4">
                                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                            <div class="mt-2">
                                                <input defaultValue={defaultValue?.price} id="price" name="price" type="number" placeholder="Enter Service Price" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                                            <div class="mt-2">
                                                <select defaultValue={defaultValue?.type} id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option value='TrendShift' >TrendShift</option>
                                                    <option value='GarmentExchange' >GarmentExchange</option>
                                                    <option value='ClothCycle' >ClothCycle</option>
                                                    <option value='FashionTrade' >FashionTrade</option>
                                                    <option value='WardrobeExchange' >WardrobeExchange</option>
                                                    <option value='SwapStyle' >SwapStyle</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-span-full">
                                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                            <div class="mt-2">
                                                <textarea defaultValue={defaultValue?.discription} type="text" id="description" name="description" placeholder="description" rows="3" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input className="btn btn-primary" type="submit" value="Update your services" />
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>




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
                                        <button onClick={() => handelEdit(item)}
                                            type="button"
                                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium mr-10 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            Edit
                                        </button>
                                        <button onClick={() => handelDelete(item)}
                                            type="button"
                                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                }


            </div>


        </>






    );
};

export default AddServices;