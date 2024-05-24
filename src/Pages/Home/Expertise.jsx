import React from 'react'
import ExpertiseCard from '../../Componets/ExpertiseCard'

export default function Expertise() {
    return (
        <div className=' lg:mx-[7%] mx-[5%] my-8'>
            <h1 className="text-black font-labil-grotesk text-[3vw] font-semibold leading-[1.2] tracking-wide text-left"
            > Expertise</h1>
            <div className='grid md:grid-cols-2 justify-between lg:gap-10 gap-6 mt-8  '>
                <ExpertiseCard />
                <ExpertiseCard />
                <ExpertiseCard />
                <ExpertiseCard />
            </div>
        </div>
    )
}
