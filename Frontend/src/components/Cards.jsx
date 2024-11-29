import React from 'react'

export default function Cards({item}) {
    
  return (
    <div className='mt-4 mb-3'>
      <div className="card bg-base-100 w-92 mx-2 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.img}
      alt={item.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="py-1 px-2 rounded-full hover:bg-pink-500 hover:text-white cursor-pointer border">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}
