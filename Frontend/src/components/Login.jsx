import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Login({ isclose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Store the form data in localStorage
    localStorage.setItem("userData", JSON.stringify(data));
    console.log("Form Data Saved to LocalStorage:", data);
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <div className="bg-white p-6 rounded-md shadow-md w-[370px] dark:bg-black dark:border-white/20">
            <div className="flex justify-between">
              <h2 className="text-lg font-roboto text-center md:text-left lg:text-left dark:text-white">
                Login
              </h2>
              <Link to="/" onClick={isclose}>
                <MdOutlineCancel className="cursor-pointer text-2xl" />
              </Link>
            </div>

            <div className="flex flex-col space-y-1 mt-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="outline-none border px-2 py-1"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col space-y-1 mt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="outline-none border px-2 py-1"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>

            <div className="flex justify-between mt-4 gap-2 w-full">
              <button
                type="submit"
                className="border px-3 w-full md:w-20 lg:w-20 py-1 rounded-md bg-pink-500 hover:bg-pink-700 text-white"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/Signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
