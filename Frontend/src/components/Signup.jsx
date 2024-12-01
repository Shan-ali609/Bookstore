// import React, { useState } from 'react';
// import { MdOutlineCancel } from 'react-icons/md';
// import { Link, useNavigate } from 'react-router-dom';
// import Login from './Login';
// import { useForm } from "react-hook-form";
// import axios from 'axios'
// import toast, { Toaster } from "react-hot-toast";

// export default function Signup() {
//     const naviagte  = useNavigate();
//   const [openit, setOpenit] = useState(false);

//   const isopen = () => setOpenit(true);
//   const isclose = () => setOpenit(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userinfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
  
//     try {
//       // console.log(userinfo);
//       const res = await axios.post('http://localhost:4001/user/singup', userinfo);
//       console.log(res.data); // Debugging: Log the server response
//       toast.success("Signup successfully",{duration : 3000})
//       localStorage.setItem("users", JSON.stringify(res.data.user))
//       naviagte('/');
//       window.location.reload();
//     } catch (error) {
//       console.error(error.response?.data || error.message); // Log detailed error
//       toast.error("Error: " + (error.response?.data?.message || error.message), {duration : 3000})
//     }
//   };
  
  

//   return (
//     <>
//     <Toaster position="top-center" /> 
//     <div className='flex items-center justify-center h-screen'>
   
//      <form   onSubmit={handleSubmit(onSubmit)} method='dialog'  >
//       <div className="bg-white p-6 rounded-md shadow-md w-[370px] dark:bg-black dark:border-white/20">
//         <div className="flex justify-between">
//           <h2 className="text-lg font-roboto text-center md:text-left lg:text-left dark:text-white">
//             Signup
//           </h2>
//           <Link to='/'>
//             <MdOutlineCancel className="cursor-pointer text-2xl" />
//           </Link>
//         </div>

//         <div className="flex flex-col space-y-1 mt-2">
//           <label htmlFor="email">Username</label>
//           <input type="text" placeholder="username" className="outline-none border px-2 py-1"
//           {...register("fullname", { required: "fullname is required" })}
//           />
//             {errors.fullname && (
//                 <span className="text-red-500 text-sm">{errors.username.message}</span>
//               )}
//         </div>
//         <div className="flex flex-col space-y-1 mt-2">
//           <label htmlFor="email">Email</label>
//           <input type="email" placeholder="Email" className="outline-none border px-2 py-1"
//           {...register("email", { required: "Email is required" })}
//           />
//             {errors.email && (
//                 <span className="text-red-500 text-sm">{errors.email.message}</span>
//               )}
//         </div>
//         <div className="flex flex-col space-y-1 mt-2">
//           <label htmlFor="email">Password</label>
//           <input type="password" placeholder="Password" className="outline-none border px-2 py-1"
//           {...register("password", { required: "Password is required" })}
//           />
//             {errors.password && (
//                 <span className="text-red-500 text-sm">{errors.password.message}</span>
//               )}
//         </div>

//         <div className="flex justify-between mt-4 gap-2 w-full">
//           <button className="border px-3 w-full md:w-20 lg:w-20 py-1 rounded-md bg-pink-500 hover:bg-pink-700">
//             Signup
//           </button>
//           <p>have account? <Link onClick={isopen} className="underline text-blue-500 cursor-pointer">Login</Link></p>
//         </div>
//       </div>
//       </form>
//       {openit && <Login  />}
//     </div>
//     </>
//   );
// }

import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();
  const [openit, setOpenit] = useState(false);

  const isopen = () => setOpenit(true);
  const isclose = () => setOpenit(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      // Make the signup request
      //  const res = await axios.post('http://localhost:4001/user/singup', userinfo);
       const res = await axios.post('https://bookstore-api-mu.vercel.app/user/singup', userinfo);

      console.log(res.data); // Debugging: Log the server response
      
      // Show success toast for 3 seconds
    
      
      // Store user info in localStorage
      localStorage.setItem("users", JSON.stringify(res.data.user));

      // Navigate to the home page
      navigate('/');

      // Optional: reload the page (if necessary)
      window.location.reload();
      toast.success("Signup successful", { duration: 5000 });
    } catch (error) {
      console.error(error.response?.data || error.message); // Log detailed error

      // Handle error for "User already exists" or other error messages
      if (error.response && error.response.data.message === "User already exists") {
        // Show error toast for 3 seconds if the user already exists
        toast.error("User already exists, please login", { duration: 3000 });
      } else {
        // Show general error toast
        toast.error("Error: " + (error.response?.data?.message || error.message), { duration: 3000 });
      }
    }
  };

  return (
    <>
      {/* Toast notifications will show here */}
      <Toaster position="top-center" /> 

      <div className='flex items-center justify-center h-screen'>
        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
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
              <label htmlFor="fullname">Username</label>
              <input 
                type="text" 
                placeholder="Username" 
                className="outline-none border px-2 py-1"
                {...register("fullname", { required: "Fullname is required" })} 
              />
              {errors.fullname && <span className="text-red-500 text-sm">{errors.fullname.message}</span>}
            </div>

            <div className="flex flex-col space-y-1 mt-2">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="outline-none border px-2 py-1"
                {...register("email", { required: "Email is required" })} 
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col space-y-1 mt-2">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                placeholder="Password" 
                className="outline-none border px-2 py-1"
                {...register("password", { required: "Password is required" })} 
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            <div className="flex justify-between mt-4 gap-2 w-full">
              <button className="border px-3 w-full md:w-20 lg:w-20 py-1 rounded-md bg-pink-500 hover:bg-pink-700">
                Signup
              </button>
              <p>Already have an account? 
                <Link onClick={isopen} className="underline text-blue-500 cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
        {openit && <Login isclose={isclose} />}
      </div>
    </>
  );
}
