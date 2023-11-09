import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Header from "../components/Header";


const Root = () => {
    return (
        <div className="container mx-auto px-5 md:px-5 lg:px-0">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;