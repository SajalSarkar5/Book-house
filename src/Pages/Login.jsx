import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import GoogleLogin from "../components/GoogleLogin";
import axios from "axios";
import swal from "sweetalert";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                axios.post(`https://backend-nine-umber.vercel.app/jwt`, { email }, { withCredentials: true })
                    .then(res => {
                        swal("Good job!", "You clicked the button!", "success");
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div>
            <div className="mt-8">
                <h1 className="text-3xl font-semibold text-cyan-400 text-center"> Login Page</h1>
            </div>

            <di0 v className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#0d3b66]">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#cae9ff]">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#cae9ff]">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[#cae9ff]">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-0 text-[#cae9ff] capitalize">Login</button>
                            </div>
                        </form>
                        <div className="w-3/4 mx-auto"><GoogleLogin></GoogleLogin></div>
                        <p className="text-center pb-4 text-[#cae9ff]">Don't have an account? <Link to="/register"><span className="text-cyan-400">Register</span></Link></p>
                    </div>
                </div>

            </di0>
        </div>
    );
};

export default Login;