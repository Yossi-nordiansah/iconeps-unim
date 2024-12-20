import React from 'react';
import showPassword from '../assets/icons/showPassword.svg';
import hiddenPassword from '../assets/icons/hidePassword.svg';
import closeIcon from '../assets/icons/close.svg'
import { useState } from 'react';

const Login = () => {

    const [showPasswordButton, setShowPasswordButton] = useState(false);

    return (
        <div className='absolute w-[30%] min-w-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/10 backdrop-blur xl:px-10 xl:py-10 py-4 px-4 rounded-2xl'>
            <div className='w-full bg-white px-3 rounded-xl py-4 shadow-2xl'>
                <h1 className='text-2xl text-center font-bold mb-2'>Login</h1>
                <form className='mx-auto mb-4'>
                    <div className='mx-auto mb-3'>
                        <label htmlFor="email" className='mb-1 block font-semibold'>Email</label>
                        <input type="email" id='email' className='w-full px-2 py-1 rounded-md outline-none shadow-2xl border-blue-300 border text-black' required/>
                    </div>
                    <div className='mx-auto mb-4'>
                        <label className='mb-1 block font-semibold' htmlFor="password">Password</label>
                        <div className='flex justify-between rounded-md border border-blue-300 overflow-hidden bg-white shadow-2xl'>
                            <input type={`${showPasswordButton ? 'text' : 'password'}`} id='password' required className='w-[85%] px-2 py-1 outline-none bg-transparent text-black'/>
                            <div className='w-[15%] cursor-pointer flex justify-center px-2 py-1' onClick={() => setShowPasswordButton(!showPasswordButton)}>
                                <img className='block' src={`${showPasswordButton ? showPassword : hiddenPassword}`} alt="show password" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-5'>
                        <button className='bg-gradient-to-r from-blue-600 to-blue-900 w-full py-1 rounded font-semibold text-white' type='submit'>Login</button>
                    </div>
                </form>
                <p className='text-sm text-center'>Belum punya akun? <a className='text-blue-600 font-semibold' href="">Daftar Sekarang</a></p>
            </div>
        </div>

    )
}

export default Login
