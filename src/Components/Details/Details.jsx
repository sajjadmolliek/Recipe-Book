import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import usePrivateHook from "../../Hooks/usePrivateHook";

const Details = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const [reviewData, setReviewData] = useState();
  const findData = products.find((data) => data._id == id);
  const axiosPublic = useAxios() ;
  const navigate = useNavigate()
  const {user} = usePrivateHook();
  useEffect(() => {
    axiosPublic
      .get(`/reviewsGet/${id}`)
      .then((res) => {
        setReviewData(res.data);
      });
  }, [axiosPublic,id]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deleteRecipe/${id}`)
          .then(() => {
            Swal.fire("Delete","You Successfully Delete Recipe","success")
            navigate("/")
          })
          
      }
    });
  };

  if (findData) {
    return (
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#E23139] pt-10 ">
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
                <div className="badge bg-[#E23139] text-white">NEW</div>
              </h2>
              <p>{findData.description}</p>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#E23139] pt-10 ">
                {" "}
                Reviews
              </h1>
              {/* Review Start */}
              {reviewData?.length > 0 ? (
                reviewData?.map((data) => (
                  <div
                    key={data.id}
                    className="flex gap-24 border-2 rounded-xl p-2 w-[90rem]"
                  >
                    <h1>Name: {data.name}</h1>
                    <h1>Comment: {data.review}</h1>
                  </div>
                ))
              ) : (
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center font-serif text-[#E23139] pt-10 ">
                  {" "}
                  No Review Yet
                </h1>
              )}

              {/* Review End */}
              <div className="flex justify-between ">
              <Link
                      to={`/review/${id}`}
                  // onClick={() => handleDelete()}
                  className="btn border-0 bg-[#E23139] text-white font-bold btn-sm"
                >
                  Give Your Comment And Review
                </Link>
              {
                user?.email === findData?.publisher? 
                <button
                  onClick={() => handleDelete()}
                  className="btn border-0 bg-[#E23139] text-white font-bold btn-sm"
                >
                  Delete
                </button>:""
              }
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
