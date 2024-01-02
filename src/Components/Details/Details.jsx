import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const [reviewData, setReviewData] = useState();
  const findData = products.find((data) => data._id == id);
  const { name, brand_name, type, price, description, rating, photo } =
    findData;
  const cartid = id;
  const fullForm = {
    name,
    brand_name,
    type,
    price,
    description,
    rating,
    photo,
    cartid,
  };

  const handleAddToCart = () => {
    fetch("https://server-coffee-alpha.vercel.app/cartProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Yeahh!", "Successfully added product", "success");
        } else {
          alert("Failed to add the product");
        }
      });
  };

  useEffect(() => {
    axios
      .get(`https://server-coffee-alpha.vercel.app/reviewsGet/${id}`)
      .then((res) => {
        setReviewData(res.data);
      });
  }, [id]);
  console.log(reviewData);
  if (findData) {
    return (
      <div className="detailsBanner">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#CF8613] pt-10 ">
                {" "}
                Details
              </h1>
        <div key={findData._id}>
          <figure>
            <img
              className="p-5 w-[30rem]  h-[30rem] mx-auto"
              src={findData.photo}
              alt="Shoes"
            />
          </figure>
          <div className="card ">
            <div className="card-body">
              <h2 className="card-title">
                {findData.name.toUpperCase()}
                <div className="badge bg-[#3B1E00] text-white">NEW</div>
              </h2>
              <p>{findData.description}</p>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#CF8613] pt-10 ">
                {" "}
                Reviews
              </h1>
              {/* Review Start */}
              {reviewData?.length > 0 ? (
                reviewData?.map((data) => (
                  <div
                    key={data.id}
                    className="flex gap-4 border-2 rounded-xl p-2 w-80"
                  >
                    <h1>Name: {data.name}</h1>
                    <h1>Comment: {data.review}</h1>
                  </div>
                ))
              ) : (
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#CF8613] pt-10 ">
                  {" "}
                  No Review Yet
                </h1>
              )}

              {/* Review End */}
              <div className="card-actions justify-end">
                <button
                  onClick={handleAddToCart}
                  className="btn border-0 bg-[#3B1E00] text-white font-bold btn-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center p-10 my-8">
          No Data Available <br /> Or <br /> You Deleted All Items
        </h1>
      </div>
    );
  }
};

export default Details;
