import React, { useState , useEffect } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Course() {
    const[book , setbook]= useState([]);
    useEffect(()=>{
      const getbook = async()=>{
      try {
    //  const res = await axios.get('http://localhost:4001/book')
     const res = await axios.get('https://bookstore-ecru-zeta.vercel.app/book')

        console.log(res.data);
        setbook(res.data)
      } catch (error) {
        console.log(error);
        
      }

      }
     getbook();
    }, [])
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div className='mt-28 text-center'>
      <h1 className='text-3xl'>We are delighted to have <span className='text-pink-500'>you Here! :)</span> </h1>
      <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione delectus sint iusto nihil. Voluptatibus, aspernatur excepturi unde doloribus laboriosam dolorum harum praesentium natus sit odio, id mollitia delectus placeat. Cupiditate error nesciunt obcaecati ad quisquam temporibus itaque quos quia pariatur iusto esse accusamus assumenda architecto recusandae maiores 
        explicabo veritatis natus excepturi ex, ut voluptate nisi repellendus blanditiis. Error, inventore.</p>
       
       <Link to='/'>
       <button className=' mt-6 bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700'>Back</button>
       </Link>
      
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {book.map((item)=>(
        <Cards key={item.id} item={item} />
      ))}
    </div>
    </div>
  )
}
