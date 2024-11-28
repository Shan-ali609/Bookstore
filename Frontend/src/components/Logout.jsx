import React from 'react'
import { useAuth } from "./contextapi/Userauth";
import toast from 'react-hot-toast';

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handlelogout =()=>{
       try {
        setAuthUser({
          ...authUser,
          user : null
        })
        localStorage.removeItem("users");
        toast.success("logout successfully")
        window.location.reload();
       } catch (error) {
        toast.error("Error: " + error.message)
       }
  }
  return (
    <div>
      <button
      onClick={handlelogout}
      className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md'>logout</button>
    </div>
  )
}
