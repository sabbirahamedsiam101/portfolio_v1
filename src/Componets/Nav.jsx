import { NavLink } from 'react-router-dom'

export default function Nav() {
    const active = "bg-white text-black px-6 py-2 lg:text-lg text-md rounded-full";
    const inActive = "text-white px-6 py-2 lg:text-lg text-md rounded-full"
    const links = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? active : inActive
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? active : inActive
            }
        >
            Projects
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? active : inActive
            }
        >
            About
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? active : inActive
            }
        >
            Blog
        </NavLink>


    </>
    return (
        <div className="navbar bg-base-100 mt-7 px-[5%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {
                        links
                       }
                    </ul>
                </div>
                <a className=" text-4xl  font-bold">SABBIR <sup className='text-2xl'>@</sup> </a>
            </div>
            <div className="navbar-center hidden px-1 bg-black rounded-full lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className=" text-[22px] cursor-pointer font-semibold bg-black text-white py-4 px-7 rounded-md hover:scale-95 duration-300 ">Hire me  &#128075; </a>
            </div>
        </div>
    )
}
