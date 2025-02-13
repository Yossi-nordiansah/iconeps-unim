import React from 'react';
import montase from '../assets/images/courious4.png';
import curious from '../assets/images/penasaran.png';

const IconepsIntro = () => {
  return (
    <div className='relative h-[460px]'>
      <div className='absolute bottom-0 block w-full h-80 bg-gradient-to-b from-secondary to-primary'>
      <div className='absolute bottom-0 flex flex-wrap items-center mt-auto '>
        <div className='lg:max-w-[53%] max-w-full min-w-[45%] mx-auto mt-16'>
          <h1 className='mb-4 text-4xl text-center text-white text-nowrap lg:mb-8 sm:text-6xl font-montserrat_extrabold drop-shadow-2xl'>Apa itu ICONEPS ??</h1>
          <p className='px-6 text-xl font-bold text-justify text-white lg:text-left drop-shadow-2xl md:text-base font-montserrat_bold'>ICONEPS (Institute for Continuing Education and Professional Services) adalah lembaga yang berada dibawah naungan Universitas Islam Majapahit yang memiliki tujuan untuk menciptakan Mahasiswa yang memiliki <i>Soft Skill</i> maupun <i>Hard Skill</i> dibidang bahasa maupun teknologi. ICONEPS sendiri memiliki 2 unit untuk menunjang tujuan dari ICONEPS, yaitu PUSBAS DAN PUSKOM</p>
        </div>
        <img src={curious} className='block mx-auto min-w-80 max-w-44 drop-shadow-2xl' alt="montase iconeps" />
      </div>
      </div>
    </div>
  )
}

export default IconepsIntro
