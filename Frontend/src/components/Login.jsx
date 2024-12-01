// import React from "react";
// import { useForm } from "react-hook-form";
// import { MdOutlineCancel } from "react-icons/md";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import toast from "react-hot-toast";

// export default function Login({ isclose }) {
 

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit =async (data) => 
//     {
//       const userinfo = {
//         email: data.email,
//         password: data.password,
//       };
    
//       try {
//         // console.log(userinfo);
//         const res = await axios.post('http://localhost:4001/user/login', userinfo);
//         console.log(res.data); // Debugging: Log the server response
//         toast.success("login successfully")
//         localStorage.setItem("users", JSON.stringify(res.data.user))
//         document.getElementById("loginpopup").closest();
//         window.location.reload();
//       } catch (error) {
//         console.error(error.response?.data || error.message); // Log detailed error
//         toast.error("Error: " + (error.response?.data?.message || error.message))
//       }
//     };

//   return (
//     <>
//       <div id="loginpopup" className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//         <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//           <div className="bg-white p-6 rounded-md shadow-md w-[370px] dark:bg-black dark:border-white/20">
//             <div className="flex justify-between">
//               <h2 className="text-lg font-roboto text-center md:text-left lg:text-left dark:text-white">
//                 Login
//               </h2>
//               <Link to="/" onClick={isclose}>
//                 <MdOutlineCancel className="cursor-pointer text-2xl" />
//               </Link>
//             </div>

//             <div className="flex flex-col space-y-1 mt-2">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 className="outline-none border px-2 py-1"
//                 {...register("email", { required: "Email is required" })}
//               />
//               {errors.email && (
//                 <span className="text-red-500 text-sm">{errors.email.message}</span>
//               )}
//             </div>

//             <div className="flex flex-col space-y-1 mt-2">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 className="outline-none border px-2 py-1"
//                 {...register("password", { required: "Password is required" })}
//               />
//               {errors.password && (
//                 <span className="text-red-500 text-sm">{errors.password.message}</span>
//               )}
//             </div>

//             <div className="flex justify-between mt-4 gap-2 w-full">
//               <button
//                 type="submit"
//                 className="border px-3 w-full md:w-20 lg:w-20 py-1 rounded-md bg-pink-500 hover:bg-pink-700 text-white"
//               >
//                 Login
//               </button>
//               <p>
//                 Not registered?{" "}
//                 <Link to="/Signup" className="underline text-blue-500 cursor-pointer">
//                   Signup
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";

export default function Login({ isclose }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      // const res = await axios.post('http://localhost:4001/user/login', userinfo);
      const res = await axios.post('https://bookstore-api-mu.vercel.app/?vercelToolbarCode=xljqeyuDbZZbGRQ/user/login', userinfo);

      console.log(res.data); // Debugging: Log the server response
      toast.success("Login successfully",{duration : 7000});

      // Store user data in localStorage and update state
      localStorage.setItem("users", JSON.stringify(res.data.user));
      setIsLoggedIn(true); // Update login status

      // Close the modal
      isclose();
      navigate('/')

      // Optionally reload the page (though it's better to handle routing/state management instead of a full reload)
      window.location.reload();
    } catch (error) {
      console.error(error.response?.data || error.message); // Log detailed error
      toast.error("Error: " + (error.response?.data?.message || error.message), {duration : 40000});
    }
  };

  const handleLogout = () => {
    // Clear user data from localStorage and update state
    localStorage.removeItem("users");
    setIsLoggedIn(false); // Update login status
    toast.success("Logged out successfully",{duration: 4000});
  };

  return (
    <>
       <Toaster position="top-center" /> 
      <div id="loginpopup" className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
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
              {!isLoggedIn ? (
                <button
                  type="submit"
                  className="border px-3 w-full md:w-20 lg:w-20 py-1 rounded-md bg-pink-500 hover:bg-pink-700 text-white"
                >
                  Login
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="border px-3 w-full md:w-20 lg:w-20 py-1 rounded-md bg-red-500 hover:bg-red-700 text-white"
                >
                  Logout
                </button>
              )}
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
