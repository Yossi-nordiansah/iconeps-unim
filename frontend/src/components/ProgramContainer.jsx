import React from 'react';
import bg_program from '../assets/images/bg-program7.png';
import Pusbas from './Pusbas';
import Puskom from './Puskom';

const ProgramContainer = () => {
  return (
    <div className='flex flex-col md:gap-16 gap-10 px-4 py-6 shadow-2xl sm:py-12 bg-netral' style={{backgroundImage: `url(${bg_program})`,backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <Pusbas/>
        <Puskom/>
    </div>
  )
}

export default ProgramContainer