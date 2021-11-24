import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { drawerOpen } from "../../redux/FavDrawer/FavDrawerSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("writer", data.writer);

    fetch(`http://localhost:4000/addBook`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
      });
  };

  return (
    <div className="">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center my-10 font-bold">
        Add Book In Book List
      </h1>
      <button className="text-8xl" onClick={() =>dispatch(drawerOpen(true))}>+</button><br/>
      <button className="text-8xl" onClick={() =>dispatch(drawerOpen(false))}>-</button>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter Book Name"
            {...register("name", { required: true })}
            className="border-2 border-black w-80 md:w-96 p-2"
          />
          <br />
          {errors.name && <span className="mb-2">Book name is required</span>}
          <br />
          <input
            placeholder="Enter Book writer"
            {...register("writer", { required: true })}
            className="border-2 border-black mt-3 w-80 md:w-96 p-2"
          />
          <br />
          {errors.category && <span>Book category is required</span>}
          <br />
          <input
            placeholder="Enter Book Price"
            {...register("price", { required: true })}
            className="border-2 border-black mt-3 w-80 md:w-96 p-2"
          />
          <br />
          {errors.price && <span>Book price is required</span>}
          <br />
          <input
            type="file"
            {...register("img", { required: true })}
            className="mt-3"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          {errors.img && <span>Book image is required</span>}
          <br />

          <button
            type="submit"
            className="rounded  hover:bg-indigo-600 focus:ring focus:ring-offset-2 focus:ring-indigo-600 px-5 py-1 font-bold mt-3 bg-indigo-500 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
