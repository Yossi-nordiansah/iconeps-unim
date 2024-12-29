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
  const [showDesktopMenuAccount, setShowDesktopMenuAccount] = useState(false);
  const [showMobileMenuAccount, setShowMobileMenuAccount] = useState(false);

  const handleShowMenuAccount = () => {
    showMobileMenuAccount(false);
    setShowMenu(!showMenu);
  }

  return (
    <div className='flex items-center justify-between w-full px-5 py-4 overflow-x-hidden bg-gradient-to-b from-blue-800 to-blue-950 sm:py-2'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="" className='w-8 sm:w-11' />
        <h1 className='text-2xl text-white sm:text-4xl font-robotoBold'>ICONEPS</h1>
      </div>
      <div className='hidden sm:block'>
        <ul className='flex items-center gap-10 text-white font-roboto'>
          <li className='hover:text-green-300'><a href="">Home</a></li>
          <li className='hover:text-green-300'><a href="">Jadwal</a></li>
          <li className='hover:text-green-300'><a href="">Pelatihan</a></li>
          <li onClick={() => setShowDesktopMenuAccount(!showDesktopMenuAccount)} className="group hover:text-green-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30px" height="30px" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
          </li>
        </ul>
        <div className={`absolute top-16 shadow-2xl bg-white overflow-hidden right-0 ${showDesktopMenuAccount ? 'translate-y-0' : '-translate-y-44'} duration-200`}>
          <Link to={''} className='flex items-center gap-1 px-6 py-3 min-w-fit' onClick={() => setShowDesktopMenuAccount(!showDesktopMenuAccount)}>
            <img src={editIcon} alt="edit profil" />
            <p className='min-w-fit'>Edit Profil</p>
          </Link>
          <Link to={''} className='flex items-center gap-1 px-6 py-3 min-w-fit' onClick={() => setShowDesktopMenuAccount(!showDesktopMenuAccount)}>
            <img src={logoutIcon} alt="logout" />
            <p className='min-w-fit'>Logout</p>
          </Link>
        </div>
      </div>
      <img src={burgerIcon} className='sm:hidden' alt="menu icon" onClick={() => setShowMenu(!showMenu)} />
      <div className={`absolute overflow-x-hidden top-0 right-0 bg-white pt-3 items-center shadow-2xl duration-500 rounded-bl-3xl ${showMenu ? 'w-44' : 'w-0'}`}>
        <img src={closeIcon} className='w-10 mb-2 ml-4' alt="close icon" onClick={handleShowMenuAccount} />
        <div className='flex flex-col font-bold text-slate-700'>
          <Link to={''} className='px-5 py-4 text-2xl border-t-2 border-b-2' onClick={handleShowMenuAccount}>
            Home
          </Link>
          <Link to={''} className='px-5 py-4 text-2xl border-b-2' onClick={handleShowMenuAccount}>
            Jadwal
          </Link>
          <Link to={''} className='px-5 py-4 text-2xl border-b-2' onClick={handleShowMenuAccount}>
            Pelatihan
          </Link>
          <div className='flex items-baseline gap-2 px-5 py-4 text-2xl' onClick={() => setShowMobileMenuAccount(!showMobileMenuAccount)}>
            <p>Akun</p>
            <img src={arrowIcon} className={`w-4 ${showMobileMenuAccount ? 'rotate-180' : 'rotate-90'} duration-100`} alt="arrow icon" />
          </div>
          <div className={`text-xl mb-1 overflow-hidden ${showMobileMenuAccount ? 'max-h-96' : 'max-h-0'} duration-200`}>
            <Link to={''} className='flex items-center gap-1 px-6 py-3 min-w-fit' onClick={() => setShowMobileMenuAccount(!showMobileMenuAccount)}>
              <img src={editIcon} alt="edit profil" />
              <p className='min-w-fit'>Edit Profil</p>
            </Link>
            <Link to={''} className='flex items-center gap-1 px-6 py-3 min-w-fit' onClick={() => setShowMobileMenuAccount(!showMobileMenuAccount)}>
              <img src={logoutIcon} alt="logout" />
              <p className='min-w-fit'>Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar