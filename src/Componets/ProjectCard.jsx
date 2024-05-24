import project1 from '../assets/project1.png'
import { FaExternalLinkAlt } from "react-icons/fa";
export default function ProjectCard() {
    const containerStyle = {
        borderRadius: '17px',
        background: '#ffffff',
        boxShadow: '5px 5px 9px #e6e6e6, -5px -5px 9px #fafafa',
        padding: '20px', // Adjust padding as needed
        margin: '20px', // Adjust margin as needed
    };
    return (
        <div>
            <div className='group max-w-[1fr]  hover:bg-slate-100 p-5 rounded-3xl duration-300 overflow-hidden relative'>
                {/* Content inside the container */}
                <div>
                    <img src={project1} alt=""  />
                </div>
                <div>
                    <h2 className=' xl:text-[1.6vw] lg:text-[2vw] py-2 md:text-[3vw] sm:text-[4vw] text-[26px] font-semibold'>Car wasg</h2>
                    <div className=' flex items-center justify-between gap-7'>
                        <p>This is a sample container styled with the provided CSS.</p>
                        <div className=' text-xl text-white group-hover:text-black duration-300'>
                            <FaExternalLinkAlt />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
