import React from 'react'
export default function ExpertiseCard({ data }) {
    const { name, id, description, icon } = data;
    return (

        <div
            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-[650px] sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-black transition-all duration-300 group-hover:scale-[16]"></span>
            <div className="relative z-10 mx-auto max-w-3xl">
                <div className=' flex lg:flex-row flex-col justify-start lg:items-end items-start gap-7'>
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-black transition-all duration-300 group-hover:bg-white">

                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white group-hover:text-black transition-all"  viewBox="0 0 256 256"><path fill="currentColor" d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.8 11.8 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"/></svg> */}
                        <p className="text-[40px] w-10  h-10   text-white group-hover:text-black transition-all" >
                            {
                                icon
                            }
                        </p>

                    </div>
                    <div>
                        <h1 className='pb-2 text-4xl  font-bold text-wrap text-black group-hover:text-white duration-300 '> {name} </h1>
                    </div>
                </div>
                <div
                    className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                    {/* <p>
                        <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                            &rarr;
                        </a>
                    </p> */}
                </div>
            </div>
        </div>
    )
}
