import React from 'react';
import montase from '../assets/images/courious.png';
import bgImage from '../assets/images/bg7.jpg';

const IconepsIntro = () => {
  return (
    <div className='flex items-center py-4 drop-shadow-2xl sm:px-16 md:py-8 bg-gradient-to-r from-orange to-transparent' >
      <img src={montase} className='block mx-auto max-w-96 drop-shadow-2xl' alt="montase iconeps" />
      <p className='px-4 text-base font-semibold text-center drop-shadow-black md:text-lg sm:px-0 text-orange md:font-robotoBold'>ICONEPS (Institute for Continuing Education and Professional Services) adalah lembaga yang berada dibawah naungan Universitas Islam Majapahit yang memiliki tujuan untuk menciptakan Mahasiswa yang memiliki <i>Soft Skill</i> maupun <i>Hard Skill</i> dibidang bahasa maupun teknologi. ICONEPS sendiri memiliki 2 unit untuk menunjang tujuan dari ICONEPS, yaitu PUSBAS DAN PUSKOM</p>
    </div>
  )
}

export default IconepsIntro

// style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundSize: "cover" }}