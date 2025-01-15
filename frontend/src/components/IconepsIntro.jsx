import React from 'react';
import montase from '../assets/images/courious4.png';
import bgImage from '../assets/images/bg-intro3.png';

const IconepsIntro = () => {
  return (
    <div className='flex flex-wrap items-center gap-4 py-4 lg:gap-10 drop-shadow-2xl sm:px-16 md:py-8' style={{backgroundImage: `url(${bgImage})`, backgroundPosition: "-30px 0px", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
      <img src={montase} className='mx-auto block min-w-80 max-w-[40%] drop-shadow-2xl' alt="montase iconeps" />
      <div className='lg:max-w-[53%] max-w-full min-w-[45%] mx-auto'>
        <h1 className='mb-4 text-4xl text-center text-nowrap lg:mb-8 sm:text-6xl font-cartoon drop-shadow-2xl text-primary'>Apa itu ICONEPS ??</h1>
        <p className='px-6 text-xl font-bold text-justify drop-shadow-2xl md:text-2xl sm:px-0 text-secondary font-radjdhani_bold'>ICONEPS (Institute for Continuing Education and Professional Services) adalah lembaga yang berada dibawah naungan Universitas Islam Majapahit yang memiliki tujuan untuk menciptakan Mahasiswa yang memiliki <i>Soft Skill</i> maupun <i>Hard Skill</i> dibidang bahasa maupun teknologi. ICONEPS sendiri memiliki 2 unit untuk menunjang tujuan dari ICONEPS, yaitu PUSBAS DAN PUSKOM</p>
      </div>
    </div>
  )
}

export default IconepsIntro
