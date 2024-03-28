/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const navContent = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Services", path: "/services"},
    {name: "Career", path: "/career"},
    {name: "Contact", path: "/contact"},
    {name: "Partner", path: "/partner"},
];

const Navbar = () => {
  return (
    <div className='flex p-5 bg-slate-500 text-white  justify-between items-center'>
        <h1 className='h-6 w-6'>Logo</h1>
        <div className='flex'>
            <ul className='flex gap-2'>
                {navContent.map((content, idx) => (
                    <li key={idx} className='  ml-4'>
                        <Link className=' text-gray-700' to={content.path}>
                            {content.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar