import React from 'react'

export default function BlogCard({blog}) {
    const {image ,description ,title} = blog
    return (
        <div className="card  p-6 max-w-[1fr] bg-base-200 shadow-xl">
            <figure className='h-[230px] w-full rounded-xl'><img src={image} alt="Shoes" className=' overflow-hidden' loading='lazy' /></figure>
            <div className="mt-4">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
