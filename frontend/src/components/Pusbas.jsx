import React from 'react';
import pusbas from '../assets/images/pusbas.jpg';
import puskom from '../assets/images/office.png'


const Pusbas = () => {
  return (
    <div className='flex px-10 py-10'>
        <div className='w-[40%] h-96 overflow-hidden rounded-tl-[120px] rounded-ee-[120px]' style={{backgroundImage: `url(${pusbas})`, backgroundPosition: '-70px', backgroundSize: 'cover'}}>
               
        </div>
        
        <p></p>
    </div>
  )
}

export default Pusbas