import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='w-lvw  bg-slate-200'>
        <div className=' max-w-[800px] items-center flex items-center p-4 justify-between   '>
        <h1 className='font-bold font-md flex text-sm sm:text-xl'>
        <span className='text-blue-400'>Real</span>
        <span className='text-gray-600'>Home</span>
        </h1>
        <form action="" className='p-2 w-24 sm:w-64 bg-slate-100 flex items-center'>
            <input type="text"placeholder='Search' className='focus:outline-none  bg-transparent w-24 '  />
            <FaSearch />
        </form>
        <ul className=' hidden sm:flex gap-3'>
        <Link to="/"> <li className='hover:underline underline-offset-4'>Home</li></Link>
        <Link to="/about"> <li className='hover:underline underline-offset-4'>About</li></Link>
        <Link to="/signin"><li className='hover:underline underline-offset-4'>SignIn</li></Link>
        <Link to="/profile"><li className='hover:underline underline-offset-4'>Profile</li></Link>
        </ul>
        </div>
    </header>
  )
}
