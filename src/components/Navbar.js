import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function NavBar()
{
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setIsMobile(!isMobile);
    }

    return(
        <nav className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-900 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start">
            <div className="flex w-full flex-wrap items-center justify-between px-6">
                <button
                className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button" onClick={handleClick}>
                    <span className="[&>svg]:w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                            <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + "/img/tb-logo.png"} className="h-14 invert" alt="" loading="lazy"/>
                </Link>
                <div className={`${isMobile ? "block" : "hidden"} flex-grow basis-[100%] items-center lg:!flex lg:basis-auto`}>
                    {/* Left links */}
                    <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
                        <li className="lg:px-2">
                            <Link className={`${location.pathname === '/' ? 'active':'block'} p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-100`} to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="lg:pr-2">
                            <Link className={`${location.pathname === '/categories' ? 'active':'block'} p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-100`} to='/categories'>
                                Categories
                            </Link>
                        </li>
                        <li className="lg:pr-2">
                            <Link className={`${location.pathname === '/about-us' ? 'active':'block'} p-0 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-100`} to='/about-us'>
                                About Us
                            </Link>
                        </li>
                    </ul>
                    {/* Left links */}
                    {/* Collapsible wrapper */}
                    <div className="relative flex items-center content-center">
                        <p className='text-yellow-400'>
                            We create, We personalize and We are quick
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;