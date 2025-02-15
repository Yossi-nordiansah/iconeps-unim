import React from 'react';
import pusbas from '../assets/images/pusbas2.jpg';


const Pusbas = () => {
  return (
    <div className='px-6 py-20 shadow-2xl bg-netral'>
      <div className='flex overflow-hidden bg-secondary rounded-tr-[50px] rounded-bl-[50px]'>
        <div className='w-1/2'>
          <h1 className='inline-block px-6 py-6 text-2xl text-white font-montserrat_bold bg-green rounded-ee-3xl'>PUSBAS</h1>
          <div className='px-5 mt-10'>
            <p className='text-white font-montserrat_semibold drop-shadow-2xl'>
              PUSBAS adalah unit yang berkegiatan di bidang bahasa. Pelatihan yang dimiliki oleh PUSBAS adalah pelatihan bahasa Inggris. PUSBAS memiliki tugas agar Mahasiswa di lingkup Universitas Islam Majapahit dapat memiliki kemampuan baik berbicara dalam bahasa Inggris maupun dalam memahami bahasa Inggris
            </p>
            <p className='mt-6 mb-6 text-2xl text-white font-netflixsansbold'>Belajar <span className='text-[#F6E96B]'>dari mana saja</span> dengan  <span className='text-[#F6E96B]'>Mentor berpengalaman</span>. Daftar sekarang dan tingkatkan kemampuan bahasa Inggrismu!</p>
            <button className='mb-10 px-5 py-2 text-white rounded-full bg-[#0B192C] font-montserrat_bold'>
              Daftar Pusbas
            </button>
          </div>
        </div>
        <div className='w-1/2' style={{ backgroundImage: `url(${pusbas})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
        </div>
      </div>
    </div>
  )
}

export default Pusbas
