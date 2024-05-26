import React from 'react'
import myPhoto from '../../assets/myphoto.webp'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
export default function About() {
    return (
        <div id='about' className="flex   lg:mx-[7%] mx-[5%] md:mt-[100px] mt-[67px]">
            <div className=" flex lg:flex-row flex-col-reverse items-center justify-center gap-8 ">
                {/* Left Side */}
                <div className="lg:w-[55%] w-full space-y-5 lg:p-8 ">
                    <h1 className="text-black font-labil-grotesk lg:text-[4vw] md:text-[5vw] sm:text-[6vw] text-5xl font-semibold leading-[1.2] tracking-wide text-left">MD Sabbir</h1>
                    <p className="text-gray-700 text-justify lg:text-2xl text-xl  leading-[38px] mb-4 lg:pr-[4vw]">Hello! I'm <strong>Sabbir</strong> , a frontend website developer based in Bangladesh. I specialize in creating modern, user-friendly websites that look great and perform seamlessly across devices. With a passion for clean and intuitive design, I enhance user experiences through responsive layouts and interactive elements. I strive to deliver websites that exceed client expectations and resonate with users globally.
                    </p>
                    <div className=' flex items-center sm:flex-nowrap flex-wrap gap-6 '>
                        <div className='sm:w-auto w-full text-center p-5 rounded-md border-4 border-black'>
                            <h2 className="lg:text-3xl text-2xl font-bold">01+</h2>
                            <p className='text-xl font-semibold'> Years Experience</p>
                        </div>
                        <div className=' sm:w-auto w-full text-center p-5 rounded-md border-4 border-black'>
                            <h2 className="lg:text-3xl text-2xl font-bold">20+</h2>
                            <p className='text-xl font-semibold'>Compleate Projets</p>
                        </div>
                        <div className='sm:w-auto w-full text-center p-5 rounded-md border-4 border-black'>
                            <h2 className="lg:text-3xl text-2xl font-bold">50+ </h2>
                            <p className='text-xl font-semibold'> Client Reviews </p>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-6 items-center">
                        {/* Replace with your actual social media icons or links */}
                        <a href="#" className="text-black text-3xl p-3 bg-transparent hover:bg-black border-4 border-black  duration-300  hover:text-white hover:shadow-md  rounded-full mr-4">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-black text-3xl p-3 bg-transparent hover:bg-black border-4 border-black  duration-300  hover:text-white hover:shadow-md  rounded-full mr-4">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-black text-3xl p-3 bg-transparent hover:bg-black border-4 border-black  duration-300  hover:text-white hover:shadow-md  rounded-full">
                            <FaGithub />
                        </a>
                    </div>
                    <div className=' flex sm:items-center items-start sm:flex-row flex-col justify-start gap-6 '>
                        <button className=" md:text-[22px] text-[20px] cursor-pointer font-semibold bg-black text-white  rounded-md hover:scale-95 duration-300 ">
                            <a href="/cv.pdf" target='_blank' className='block py-4 px-7'>
                                📄 Download CV
                            </a>
                        </button>
                        <button className=" md:text-[22px] text-[20px] cursor-pointer font-semibold block py-4 px-7 bg-black text-white  rounded-md hover:scale-95 duration-300 ">
                            Hire Me 👋
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:w-[45%] w-full">
                    <img className="w-full" src={myPhoto} alt="Profile" />
                </div>
            </div>
        </div>
    )
}
