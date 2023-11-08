import Header from "../components/Header";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import Category from "./category";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Card></Card>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default Home;