import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

export default function Signup() {
  const [openit, setOpenit] = useState(false);

  const isopen = () => setOpenit(true);
  const isclose = () => setOpenit(false);
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
    <div className='flex items-center justify-center h-screen'>
   
     <form   onSubmit={handleSubmit(onSubmit)} method='dialog'  >
      <div className="bg-white p-6 rounded-md shadow-md w-[370px] dark:bg-black dark:border-white/20">
        <div className="flex justify-between">
          <h2 className="text-lg font-roboto text-center md:text-left lg:text-left dark:text-white">
            Signup
          </h2>
          <Link to='/'>
            <MdOutlineCancel className="cursor-pointer text-2xl" />
          </Link>
        </div>

        <div className="flex flex-col space-y-1 mt-2">
          <label htmlFor="email">Username</label>
          <input type="text" placeholder="username" className="outline-none border px-2 py-1"
          {...register("username", { required: "Username is required" })}
          />
            {errors.username && (
                <span className="text-red-500 text-sm">{errors.username.message}</span>
              )}
        </div>
        <div className="flex flex-col space-y-1 mt-2">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" className="outline-none border px-2 py-1"
          {...register("email", { required: "Email is required" })}
          />
            {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
        </div>
        <div className="flex flex-col space-y-1 mt-2">
          <label htmlFor="email">Password</label>
          <input type="password" placeholder="Password" className="outline-none border px-2 py-1"
          {...register("password", { required: "Password is required" })}
          />
            {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
        </div>

        <div className="flex justify-between mt-4 gap-2 w-full">
          <button className="border px-3 w-full md:w-20 lg:w-20 py-1 rounded-md bg-pink-500 hover:bg-pink-700">
            Signup
          </button>
          <p>have account? <Link onClick={isopen} className="underline text-blue-500 cursor-pointer">Login</Link></p>
        </div>
      </div>
      </form>
      {openit && <Login  />}
    </div>
  );
}
