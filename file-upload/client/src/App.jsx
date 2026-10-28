import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler =  async (data) => {
    console.log(data)

    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("email",data.email);
    for(let i=0; i<data.images.length;i++ ){

      formData.append("images",data.images[i]);
    }



    await axios.post("http://localhost:3000/user/create", formData)

  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Create Profile
        </h2>

        <p className="text-sm text-gray-500 text-center mb-8">
          Enter your details to get started
        </p>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name
          </label>

          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email Address
          </label>

          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          />
        </div>

        <div className="mb-7">
          <label
            htmlFor="images"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            images
          </label>

          <input
            {...register("images")} multiple
            type="file"
            id="images"
            accept="image/*"
            className="w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 file:mr-4 file:py-3 file:px-4 file:border-0 file:bg-indigo-50 file:text-indigo-700 file:font-semibold hover:file:bg-indigo-100 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 active:scale-[0.98] transition duration-200"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default App;
