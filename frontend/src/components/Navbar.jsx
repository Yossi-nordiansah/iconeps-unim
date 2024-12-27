import React, { useState } from 'react';
import logo from '../assets/images/iconeps_logo.png';
import burgerIcon from '../assets/icons/burgerIcon.svg';
import closeIcon from '../assets/icons/close.svg';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/icons/arrow.svg';
import editIcon from '../assets/icons/setting.svg';
import logoutIcon from '../assets/icons/logout.svg';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showMenuAccount, setShowMenuAccount] = useState(false);

  const handleShowMenuAccount = () => {
    setShowMenu(!showMenu);
    setShowMenuAccount(false);
  }

  return (
    <div className='overflow-x-hidden bg-gradient-to-b w-full from-blue-800 to-blue-950 px-5 sm:py-2 py-4 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="" className='sm:w-11 w-8' />
        <h1 className='text-white sm:text-4xl text-2xl font-robotoBold'>ICONEPS</h1>
      </div>
      <div className='sm:block hidden'>
        <ul className='font-roboto flex gap-10 text-white items-center'>
          <li className='hover:text-green-300'><a href="">Home</a></li>
          <li className='hover:text-green-300'><a href="">Jadwal</a></li>
          <li className='hover:text-green-300'><a href="">Pelatihan</a></li>
          <li className="group hover:text-green-300"><a href="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30px" height="30px" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg></a></li>
        </ul>
      </div>
      <img src={burgerIcon} className='sm:hidden' alt="menu icon" onClick={()=>setShowMenu(!showMenu)}/>
      <div className={`absolute overflow-x-hidden top-0 right-0 bg-white pt-3 items-center shadow-2xl duration-500 rounded-bl-3xl ${showMenu? 'w-44' : 'w-0'}`}>
        <img src={closeIcon} className='w-10 mb-2 ml-4' alt="close icon" onClick={()=>setShowMenu(!showMenu)}/>
        <div className='flex flex-col font-bold text-slate-700'>
          <Link to={''} className='py-4 text-2xl px-5 border-b-2 border-t-2' onClick={()=>setShowMenu(!showMenu)}>
            Home
          </Link>
          <Link to={''} className='py-4 px-5 text-2xl border-b-2' onClick={()=>setShowMenu(!showMenu)}>
            Jadwal
          </Link>
          <Link to={''} className='py-4 px-5 text-2xl border-b-2' onClick={()=>setShowMenu(!showMenu)}>
            Pelatihan
          </Link>
          <div className='flex gap-2 items-baseline text-2xl py-4 px-5' onClick={()=>setShowMenuAccount(!showMenuAccount)}>
            <p>Akun</p>
            <img src={arrowIcon} className={`w-4 ${showMenuAccount? 'rotate-180' : 'rotate-90'} duration-100`} alt="arrow icon" />
          </div>
          <div className={`text-xl mb-1 overflow-hidden ${showMenuAccount? 'max-h-96' : 'max-h-0'} duration-200`}>
            <Link to={''} className='flex py-3 gap-1 items-center px-6' onClick={handleShowMenuAccount}>
              <img src={editIcon} alt="edit profil" />
              <p>Edit Profil</p>
            </Link>
            <Link to={''} className='flex py-3 items-center gap-1 px-6' onClick={handleShowMenuAccount}>
              <img src={logoutIcon} alt="logout" />
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar