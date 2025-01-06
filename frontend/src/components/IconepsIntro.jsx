import React from 'react';
import montase from '../assets/images/hero.png'

const IconepsIntro = () => {
  return (
    <div className='flex flex-wrap items-center justify-between py-6 sm:px-16 bg-gradient-to-b from-purple to-white md:py-14'>
        <img src={montase} className='block w-11/12 mx-auto border xl:max-w-xl' alt="montase iconeps"/>
        <p className='max-w-md text-justify'>ICONEPS (Institute for Continuing Education and Professional Services) adalah lembaga yang berada dibawah naungan Universitas Islam Majapahit yang memiliki tujuan untuk menciptakan Mahasiswa yang memiliki <i>Soft Skill</i> maupun <i>Hard Skill</i> dibidang bahasa maupun teknologi. ICONEPS sendiri memiliki 2 unit untuk menunjang tujuan dari ICONEPS, yaitu PUSBAS DAN PUSKOM</p>
    </div>
  )
}

export default IconepsIntro