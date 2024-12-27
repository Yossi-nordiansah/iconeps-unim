import React from 'react';
import logo from '../assets/images/iconeps_logo.png';
import accountIcon from '../assets/icons/account.svg'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-b from-blue-800 to-blue-950 px-5 py-2 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="" className='w-11' />
        <h1 className='text-white text-4xl font-robotoBold'>ICONEPS</h1>
      </div>
      <ul className='font-roboto flex gap-10 text-white items-center'>
        <li className='hover:text-green-300'><a href="">Home</a></li>
        <li className='hover:text-green-300'><a href="">Jadwal</a></li>
        <li className='hover:text-green-300'><a href="">Pelatihan</a></li>
        <li className='hover:text-green-300'><a href=""><img src={accountIcon} className='w-8' alt="icon account" /></a></li>
      </ul>
    </div>
  )
}

export default Navbar