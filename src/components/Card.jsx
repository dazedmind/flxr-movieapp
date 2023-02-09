import React from 'react'

const Card = (props) => {
  return (
    <div className='flex text-white text-sm bg-slate-800 rounded-md w-auto h-auto xl:w-100 m-2 overflow-hidden'>
        <img src={props.img} alt="highrise"  className='w-28 h-44 xl:w-36 xl:h-auto'/>
        <div className=' p-6'>
          <h3 className='text-2xl font-bold text-cyan-400'>{props.title}</h3>
          <p>Date: {props.date}</p>
          <p>Rating {props.rating}/10</p>
          <p>Cast: Tom Hiddleston, Sienna Miller</p>

          <button className='hidden xl:block px-4 py-2 bg-slate-200 rounded-full text-black font-bold mt-6'>Watch Now</button>
        </div>
    </div>
  )
}

export default Card