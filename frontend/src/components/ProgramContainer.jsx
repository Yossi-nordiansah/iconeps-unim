import React from 'react';
import bg_program from '../assets/images/bg-program6.png';
import Pusbas from './Pusbas';
import Puskom from './Puskom';

const ProgramContainer = () => {
  return (
    <div className='px-4 py-6 shadow-2xl sm:py-20 bg-netral' style={{backgroundImage: `url(${bg_program})`,backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <Pusbas/>
        <Puskom/>
    </div>
  )
}

export default ProgramContainer