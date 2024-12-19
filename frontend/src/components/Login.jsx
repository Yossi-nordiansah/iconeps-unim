import React from 'react';
import showPassword from '../assets/icons/showPassword.svg';
import hiddenPassword from '../assets/icons/hidePassword.svg'
import { useState } from 'react';

const Login = () => {

    const [showPasswordButton, setShowPasswordButton] = useState(false);

    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/10 backdrop-blur px-10 py-10 rounded-2xl'>
            <div className='min-w-72 bg-gradient-to-b from-orange-600 to-orange-500 px-3 rounded-xl text-white py-4'>
                <h1 className='text-2xl text-center font-bold text-white mb-2'>Login</h1>
                <form className='mx-auto mb-4'>
                    <div className='mx-auto mb-3'>
                        <label htmlFor="email" className='mb-1 block font-semibold'>Email</label>
                        <input type="email" id='email' className='w-full px-2 py-1 rounded outline-none text-black' required/>
                    </div>
                    <div className='mx-auto mb-4'>
                        <label className='mb-1 block font-semibold' htmlFor="password">Password</label>
                        <div className='flex justify-between rounded overflow-hidden bg-white'>
                            <input type={`${showPasswordButton ? 'text' : 'password'}`} id='password' required className='w-[85%] px-2 py-1 outline-none bg-transparent text-black'/>
                            <div className='w-[15%] cursor-pointer flex justify-center px-2 py-1' onClick={() => setShowPasswordButton(!showPasswordButton)}>
                                <img className='block' src={`${showPasswordButton ? showPassword : hiddenPassword}`} alt="show password" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-5'>
                        <button className='bg-green-700 min-w-20 py-1 rounded font-bold' type='submit'>Login</button>
                        <button className='bg-red-800 min-w-20 py-1 rounded font-bold'>Cancel</button>
                    </div>
                </form>
                <p className='text-sm text-center'>Belum punya akun? klik <a className='text-blue-950 font-bold' href="">Registrasi</a></p>
            </div>
        </div>

    )
}

export default Login