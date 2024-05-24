import { useState } from 'react'
import project1 from '../../assets/project1.png'
import ProjectCard from '../../Componets/ProjectCard'
export default function Projects() {
    return (
        <section className='my-[5vw] mx-[7%] '>
            <div className='ml-5 max-w-[450px]'>
                <h1 className="text-black font-labil-grotesk text-[3vw] font-semibold leading-[1.2] tracking-wide text-left"
                > Projects</h1>
                <p className="text-black font-labil-grotesk text-xl mt-4 font-medium leading-[1.4] tracking-wide text-left"
                >As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
            </div>

            {/* all prject */}
            <div className=' grid grid-cols-4 gap-10 mt-8  '>
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
