import React from 'react';
import { useState } from 'react';
import showPassword from '../assets/icons/showPassword.svg';
import hiddenPassword from '../assets/icons/hidePassword.svg';

const Registrasi = () => {

  const [showPasswordButton, setShowPasswordButton] = useState(false);
  const [showConfirmPasswordButton, setShowConfirmPasswordButton] = useState(false);

  return (
    <div className='relative min-h-screen bg-gradient-to-b from-blue-800 to-teal-300'>
      <div className='min-w-64 max-w-[450px] w-11/12 rounded-lg text-gray-950 absolute left-1/2 -translate-x-1/2 backdrop-blur bg-white/20 top-1/2 -translate-y-1/2 py-4 px-4'>
        <h1 className='font-semibold text-center mb-2 text-xl'>Registrasi</h1>
        <div className='mx-auto mb-3'>
          <label htmlFor="nama" className='mb-1 block font-semibold'>Nama Lengkap</label>
          <input type="text" id='nama' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
        </div>
        <div className='mx-auto mb-3'>
          <label htmlFor="email" className='mb-1 block font-semibold'>Email</label>
          <input type="email" id='email' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
        </div>
        <div className='mx-auto mb-3'>
          <label htmlFor="telepon" className='mb-1 block font-semibold'>Nomor Telepon / WA</label>
          <input type="tel" id='telepon' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
        </div>
        <div className='mx-auto mb-3'>
          <label htmlFor="prodi" className='mb-1 block font-semibold'>Fakultas / Prodi</label>
          <input type="text" id='prodi' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
        </div>
        <div className='mx-auto mb-3'>
          <label htmlFor="semester" className='mb-1 block font-semibold'>Semester</label>
          <input type="text" id='semester' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
        </div>
        <div className='mx-auto mb-3'>
          <label htmlFor="nim" className='mb-1 block font-semibold'>NIM</label>
          <input type="text" id='nim' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required />
        </div>
        <div className='mx-auto mb-4'>
          <label className='mb-1 block font-semibold' htmlFor="password">Password</label>
          <div className='flex justify-between rounded-md border border-blue-300 overflow-hidden bg-white shadow-2xl'>
            <input type={`${showPasswordButton ? 'text' : 'password'}`} id='password' required className='w-[85%] px-2 py-1 outline-none bg-transparent text-black' />
            <div className='w-[15%] cursor-pointer flex justify-center px-2 py-1' onClick={() => setShowPasswordButton(!showPasswordButton)}>
              <img className='block' src={`${showPasswordButton ? showPassword : hiddenPassword}`} alt="show password" />
            </div>
          </div>
        </div>
        <div className='mx-auto mb-4'>
          <label className='mb-1 block font-semibold' htmlFor="password">Confirm Password</label>
          <div className='flex justify-between rounded-md border border-blue-300 overflow-hidden bg-white shadow-2xl'>
            <input type={`${showConfirmPasswordButton ? 'text' : 'password'}`} id='password' required className='w-[85%] px-2 py-1 outline-none bg-transparent text-black' />
            <div className='w-[15%] cursor-pointer flex justify-center px-2 py-1' onClick={() => setShowConfirmPasswordButton(!showConfirmPasswordButton)}>
              <img className='block' src={`${showConfirmPasswordButton ? showPassword : hiddenPassword}`} alt="show password" />
            </div>
          </div>
        </div>
        <button className='bg-gradient-to-r from-blue-600 to-blue-900 w-full py-1 rounded font-semibold text-white' type='submit'>Registrasi</button>
      </div>
    </div>
  )
}

export default Registrasi