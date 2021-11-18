import React from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center my-10 font-bold">
        Add Book In Book List
      </h1>
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
            placeholder="Enter Book Category"
            {...register("category", { required: true })}
            className="border-2 border-black mt-3 w-80 md:w-96 p-2"
          />
          <br />
          {errors.category && <span>Book category is required</span>}
          <br />
          <input
            type="file"
            {...register("image", { required: true })}
            className="mt-3"
          />
          <br />
          {errors.image && <span>Book image is required</span>}
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
