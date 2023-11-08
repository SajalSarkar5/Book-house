import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
    </>

    const myService = <>
        <Link to="/myservice"><li>Add-Service</li></Link>
    </>
    const addservices = <>
        <Link to="/addservices"><li>My-services</li></Link>
    </>
    const myschedules = <>
        <Link to="/myschedules"><li>My-schedules</li></Link>
    </>

    const mybooking = <>
        <Link to="/mybooking"><li>My-Bookings</li></Link>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        <li >
                            <a>Dashboard</a>
                            <ul className="p-2">
                                {addservices}
                                {myService}
                                {myschedules}
                                {mybooking}
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Clothing Swap</a>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                    <li tabIndex={0}>
                        <details>
                            <summary>Dashboard</summary>
                            <ul className="p-2">
                                {addservices}
                                {myService}
                                {myschedules}
                                {mybooking}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-6">
                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                {
                    user ?
                    <button onClick={handleSingOut} className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-[#FFF] capitalize">Sing Out</button>
                    :
                    <Link to="/login">
                        <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize">Login</button>
                    </Link>
                }

            </div>
        </div>
    );
};

export default Header;