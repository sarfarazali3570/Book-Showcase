import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,title,coverImage,category}) => {
  return (
    <>
    <div key={id} className='  rounded-md flex h-100 w-56 flex-col items-center '>
    <div className='p-1 rounded-md h-75 w-60'>
       <img src={coverImage} className='object-cover h-full w-full' alt="" />
    </div>


    <h1 className='font-bold font-mono text-lg text-black overflow-hidden'>{title}</h1>
   <Link to={`/bookdetails/${category}/${id}`}>
   <button className='p-1 bg-black rounded-lg mb-1 text-white '> View Details</button>
   </Link> 

    </div>
    </>
  )
}

export default Card