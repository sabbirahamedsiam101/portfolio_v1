import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    const active = "sm:bg-white bg-black text-white sm:text-black sm:text-left text-center  lg:px-6 px-4  lg:py-2 py-1 lg:text-lg text-md rounded-md sm:rounded-full";
    const inActive = "sm:text-white text-black sm:text-left text-center   lg:px-6 px-4 lg:py-2 py-1 lg:text-lg text-md rounded-full"

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
            <div className="navbar-start ">
                <Link to={'/'} className="navbar-start text-4xl  font-bold">SABBIR </Link>
            </div>
            <div className="navbar-center hidden px-1 bg-black rounded-full md:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="hidden sm:block text-[20px] lg:text-[22px] cursor-pointer font-semibold bg-black text-white py-2 lg:py-4 px-4 lg:px-7 rounded-md hover:scale-95 duration-300 ">Hire me  &#128075; </a>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                {/* <div className="drawer drawer-end bg-slate-50 z-20 relative">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                        <label htmlFor="my-drawer-4" className="drawer-button btn sm:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                            {
                                links
                            }
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
