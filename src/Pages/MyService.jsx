import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const MyService = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        const area = e.target.area.value;
        const type = e.target.country.value;
        const price = e.target.price.value;
        const discription = e.target.description.value;
        const userEmail = user.email;
        const userName = user.displayName;
        const data = { name, image, type, price, area, discription, userEmail, userName }
        console.log(data)

        axios.post('http://localhost:3000/addservices', data, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                swal("Good job!", "Sucessfully added services!", "success");
                navigate('/')
            })

    }


    return (
        <div>
            <h1 className="text-center text-black text-5xl">Add service</h1>
            <div className="my-6">
                <hr />
            </div>

            <form onSubmit={handelSubmit}>
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
                                        <input type="text" name="name" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter Service Name" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Service Area</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="area" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter Service Area" />
                                    </div>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label class="block text-sm font-medium leading-6 text-gray-900">Service Image</label>
                                <div class="mt-2">
                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input type="text" name="image" id="image" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter image url" />
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
                                    <input id="price" name="price" type="number" placeholder="Enter Service Price" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
                                <div class="mt-2">
                                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
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
                                    <textarea type="text" id="description" name="description" placeholder="description" rows="3" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <input className="btn btn-primary" type="submit" value="Add your services" />
                    </div>

                </div>

            </form>



        </div>
    );
};

export default MyService;