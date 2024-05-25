import React, { useEffect, useState } from 'react'
import ExpertiseCard from '../../Componets/ExpertiseCard'
import useFetch from '../../Hooks/useFetch'
import { FaBug, FaCode, FaMobileAlt, FaTachometerAlt, FaUsers } from 'react-icons/fa';

export default function Expertise() {
    //   const [experts , setExperts ] = useState([])
    // useEffect(() => {
    //     fetch(`/expertises.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setExperts(data)
    //         })
    // }, []) // useEffect(() => {
    //     fetch(`/expertises.json`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setExperts(data)
    //         })
    // }, [])
    const experts =  [
        {
          name: "Core Technologies",
          description: "Advanced knowledge of HTML5, CSS3, and JavaScript (ES6+). Experience with front-end frameworks and libraries such as React, Angular, or Vue.js. Familiarity with CSS preprocessors like SASS or LESS.",
          icon: <FaCode />
        },
        {
          name: "Responsive Design ",
          description: "Expertise in creating responsive layouts using CSS Grid, Flexbox, and media queries. Understanding of mobile-first design principles to ensure optimal user experiences on small screens.",
          icon: <FaMobileAlt />
        },
        {
          name: "Performance Optimization",
          description: "Skills in optimizing website performance through techniques like minification, compression, and caching. Ability to use tools like Lighthouse, WebPageTest, and browser developer tools to identify and fix performance issues.",
          icon: <FaTachometerAlt />
        },
        {
          name: "Version Control ",
          description: "Proficiency in using Git for version control and collaboration. Experience with task runners and module bundlers like Gulp, Webpack, or Parcel to automate development workflows.",
          icon: <FaCode />
        },
        {
          name: "UX Principles",
          description: "Understanding of UX design principles and best practices. Ability to collaborate with UX designers to create intuitive and engaging user interfaces.",
          icon: <FaUsers />
        },
        {
          name: "Testing and Debugging",
          description: "Familiarity with testing frameworks and tools such as Jest, Mocha, or Cypress for writing unit, integration, and end-to-end tests. Strong debugging skills to identify and fix issues in code using browser developer tools and other debugging tools.",
          icon: <FaBug />
        }
      ];
    
    return (
        <div className=' lg:mx-[7%] mx-[5%] my-8'>
            <h1 className="text-black font-labil-grotesk text-[3vw] font-semibold leading-[1.2] tracking-wide text-left"
            > Expertise</h1>
            <div className='grid md:grid-cols-2 justify-between lg:gap-10 gap-6 mt-8  '>
                {
                    experts.map((expert , idx) =>   <ExpertiseCard key={idx} data={expert} />)
                }  
            </div>
        </div>
    )
}
