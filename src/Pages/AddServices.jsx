import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";


const AddServices = () => {
    const { user } = useContext(AuthContext)

    console.log(user)
    // if (email) {
    //     useEffect(() => {
    //         axios.get(`http://localhost:3000/myservices?email=${email}`)
    //             .then(res => {
    //                 console.log(res.data)
    //             })

    //     }, [])

    // }



    return (
        <div>
            <h1 className="text-5xl">My-services</h1>
        </div>
    );
};

export default AddServices;