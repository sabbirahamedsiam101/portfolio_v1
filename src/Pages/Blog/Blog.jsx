import React, { useEffect, useState } from 'react'
import BlogCard from '../../Componets/BlogCard'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch(`/blog.json`)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (

    <div className='mx-[5%] lg:mx-[7%]'>
      <div className=' grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-10 mt-8  '>
        {
          blogs.map((blog, idx) => <BlogCard key={idx} blog={blog} />)
        }
      </div>
    </div>

  )
}
