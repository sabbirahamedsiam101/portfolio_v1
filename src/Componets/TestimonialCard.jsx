import React from 'react'

export default function TestimonialCard() {
    return (
        <div className='rounded-3xl bg-slate-200 max-w-[500px] h-[580px] mx-auto relative'>
            <h1 className=' text-3xl p-10'> “Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”
            </h1>
            <div className=' absolute flex   gap-5 bottom-0 left-0 p-5 rounded-tr-2xl bg-white'>
                <div className=' h-10 w-10 rounded-full bg-green-300'>
  
                </div>
                <p className='text-2xl'>Name of user</p>
            </div>
        </div>
    )
}
