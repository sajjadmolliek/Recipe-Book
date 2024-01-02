/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const Cards = ({ data }) => {
  const handleBrandCatagory = (brandName) => {
    const lowarCaseBrandName = brandName.toLowerCase();

    fetch("https://server-coffee-alpha.vercel.app/addProducts", {
      method: "POST", // Change to POST to send data to the backend
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brand_name: lowarCaseBrandName }), // Send the brand_name as an object
    })
      .then((res) => res.json())
      .then(() => {});
  };

  return (
    <>
      {data.map((card) => (
        <div key={card.id} className="hover:shadow-2xl">
          <NavLink
            onClick={() => handleBrandCatagory(card.brand_name)}
            to={`/addProducts/${card.brand_name}`}
          >
            <div className=" mx-auto h-[15rem] md:w-96   mb-6" data-aos="flip-left">
              <figure className="flex justify-center items-center">
                <img className="h-52 w-full" src={card.image} alt="Shoes" />
              </figure>
              <div>
                <h2 className="text-center bg-[#CF861380] py-1 text-3xl text-white">
                  {card.brand_name}
                </h2>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default Cards;
