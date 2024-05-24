import React from 'react'
import ExpertiseCard from '../../Componets/ExpertiseCard'

export default function Expertise() {
    return (
        <div className=' mx-[7%] my-8'>
            <h1 className="text-black font-labil-grotesk text-[3vw] font-semibold leading-[1.2] tracking-wide text-left"
            > Expertise</h1>
            <div className='grid grid-cols-2 justify-between gap-10 mt-8  '>
                <ExpertiseCard />
                <ExpertiseCard />
                <ExpertiseCard />
                <ExpertiseCard />
            </div>
        </div>
    )
}
