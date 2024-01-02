import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-[50%] mx-auto mt-[15%]">
            <h1 className="text-center text-6xl font-bold">OPPS!</h1>
            <h2 className="text-center text-xl font-medium my-5">Something Went Wrong</h2>
            <h2 className="text-center text-sm font-medium">Found 404 </h2>
            <div className="flex justify-center mt-10">
                <NavLink to={"/"} className="btn btn-accent">Go TO root</NavLink>
            </div>
        </div>
    );
};

export default Error;