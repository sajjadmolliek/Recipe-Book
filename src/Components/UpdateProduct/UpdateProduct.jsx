import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import imLogo from "../../assets/logo.png";
// import Select from 'react-select';
import { useState } from "react";
import Select from "react-select";
import useAxios from "../../Hooks/useAxios";

const UpdateProduct = () => {
  const updateData = useLoaderData();
  const axiosPublic = useAxios();
  const { _id, name, brand_name, type, description, photo } = updateData;
  const [selectedOption, setSelectedOption] = useState(brand_name);
  const options = [
    { value: "bangali", label: "Bangali" },
    { value: "traditional", label: "Traditional" },
    { value: "korean", label: "Korean" },
    { value: "chaines", label: "Chaines" },
    { value: "indian", label: "Indian" },
    { value: "nonevage", label: "Nonevage" },
  ];

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand_name = selectedOption.value || selectedOption;
    const type = form.type.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const fullForm = {
      name,
      brand_name,
      type,
      description,
      photo,
    };

    axiosPublic.patch(`/addRecipe/${_id}`,fullForm)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          form.reset();
          Swal.fire("Yeahh!", "Successfully Update product", "success");
        }
      });
  };

  return (
    <>
      <div className="md:w-[40rem] mx-auto py-10">
        <p className="font-bold font-serif text-xl md:text-3xl text-[#E23139] text-center py-2">
          Update Your {name}
        </p>
        <div className="flex justify-center  items-center gap-x-4">
          <div className="w-[10rem] h-[1px] bg-[#E23139]" />
          <img className="w-[3rem]" src={imLogo} alt="imLogo" />
          <div className="w-[10rem] h-[1px] bg-[#E23139]" />
        </div>
      </div>

      <form
        onSubmit={handleUpdate}
        className="lg:w-3/5 mx-auto bg-[#FFF9ED] p-10 mb-20 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#E23139] text-white font-bold">
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
            <span className="w-[10rem] bg-[#E23139] text-white font-bold">
              Category
            </span>
            <Select
              className="w-full"
              defaultValue={options.find(
                (option) => option.value === selectedOption
              )}
              onChange={setSelectedOption}
              options={options}
            />
          </label>
        </div>
        <div className="  flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#E23139] text-white font-bold">
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
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto input-group-md ">
            <span className="w-[10rem] bg-[#E23139] text-white font-bold">
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
        </div>

        <label className="input-group md:w-4/5 lg:w-full mx-auto lg:input-group-md mb-10">
          <span className="w-[10rem] bg-[#E23139] text-white font-bold">
            Description
          </span>
          <textarea
            defaultValue={description}
            name="description"
            type="text"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          />
        </label>

        <input
          className="w-full text-center btn text-white text-bold text-lg bg-[#E23139]"
          type="submit"
          value="Update"
        />
      </form>
    </>
  );
};

export default UpdateProduct;
