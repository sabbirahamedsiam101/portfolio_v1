import { useState } from 'react'
import project1 from '../../assets/project1.png'
import ProjectCard from '../../Componets/ProjectCard'
export default function Projects() {
    return (
        <section className='lg:my-[5vw] md:my-[7vw] my-[60px] lg:mx-[7%] mx-[5%] '>
            <div className='ml-5 max-w-[450px]'>
                <h1 className="text-black font-labil-grotesk 2xl:text-[3vw] lg:text-[4vw] md:text-[4.5vw] sm:text-[6vw] text-[40px] font-semibold leading-[1.2] tracking-wide text-left"
                > Projects</h1>
                <p className="text-black font-labil-grotesk text-xl mt-4 font-medium leading-[1.4] tracking-wide text-left"
                >As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
            </div>

            {/* all prject */}
            <div className=' grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-10 mt-8  '>
                {/* single project */}
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}
