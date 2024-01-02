import { useLoaderData } from "react-router-dom";
import Services from "../Components/Services/Services";
import Gallery from "../Components/Gallery/Gallery";
import Banner from "../Layouts/Banner";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Services data={data}></Services>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;