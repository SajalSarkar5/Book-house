
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const GoogleLogin = () => {

    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelGoogleLogin = () => {
        googleSignIn()
            .then((res) => {
                toast.success(`${res.user.displayName} Successfully login`)
                navigate('/')
            }).catch((error) => {
                toast.error("Login failed !")

            })
    }


    return (
        <div>
            <button className='btn w-full bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize' onClick={handelGoogleLogin}>Google Login</button>
        </div>
    );
};

export default GoogleLogin;