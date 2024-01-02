import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import imLogo from "../../assets/icons/01.png";


const UpdateProduct = () => {
  const updateData = useLoaderData();
  const {_id,name,brand_name,type,price,description,rating,photo} = updateData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = form.brand_name.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const fullForm = {name,brand_name,type,price,description,rating,photo,};

    fetch(`https://server-coffee-alpha.vercel.app/addProduct/${_id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullForm),
      })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0)
        {
            form.reset();
            Swal.fire("Yeahh!", "Successfully Update product", "success");
        }
      })
  };

  return (
    <div className="galleryBanner">
      <div className="md:w-[40rem] mx-auto py-10">
        <p className="font-bold font-serif text-xl md:text-3xl text-[#CF8613] text-center py-2">
          Update Your {name}
        </p>
        <div className="flex justify-center  items-center gap-x-4">
          <div className="w-[10rem] h-[1px] bg-[#CF8613]" />
          <img className="w-[3rem]" src={imLogo} alt="imLogo" />
          <div className="w-[10rem] h-[1px] bg-[#CF8613]" />
        </div>
      </div>

      <form
        onSubmit={handleUpdate}
        className="lg:w-3/5 mx-auto bg-[#FFF9ED] p-10 my-10 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#3B1E00] text-white font-bold">
              Name
            </span>
            <input
            defaultValue={name}
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#3B1E00] text-white font-bold">
              Brand Name
            </span>
            <input
            defaultValue={brand_name}
              name="brand_name"
              type="text"
              placeholder="Brand Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="  flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#3B1E00] text-white font-bold">
              Type
            </span>
            <input
            defaultValue={type}
              name="type"
              type="text"
              placeholder="Type"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#3B1E00] text-white font-bold">
              Price
            </span>
            <input
            defaultValue={price}
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#3B1E00] text-white font-bold">
              Description
            </span>
            <input
            defaultValue={description}
              name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#3B1E00] text-white font-bold">
              Rating
            </span>
            <input
            defaultValue={rating}
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md mb-10">
          <span className="w-[10rem] bg-[#3B1E00] text-white font-bold">
            Photo URL
          </span>
          <input
          defaultValue={photo}
            name="photo"
            className="w-full input input-bordered input-md"
            type="text"
            placeholder="Photo URL"
          />
        </label>
        <input
          className="w-full text-center btn text-white text-bold text-lg bg-[#3B1E00]"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;