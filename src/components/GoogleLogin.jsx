
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

import toast from 'react-hot-toast';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {

    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelGoogleLogin = () => {
        googleSignIn()
            .then((res) => {
                const email = res.user.email;
                axios.post(`http://localhost:3000/jwt`, { email }, { withCredentials: true })
                    .then(res => {
                        swal("Good job!", "You clicked the button!", "success");
                        navigate('/')
                    })

            }).catch((error) => {
                toast.error("Login failed !")

            })
    }


    return (
        <div>
            <button className='btn w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-[#FFF] capitalize' onClick={handelGoogleLogin}>Google Login</button>
        </div>
    );
};

export default GoogleLogin;