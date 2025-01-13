import React from 'react';
import flexibleIcon from "../assets/icons/flexible.svg";
import materiUpdateIcon from "../assets/icons/materi_terupdate.svg";
import relevanIcon from "../assets/icons/work.svg";
import fasilitasICon from "../assets/icons/fasilitas.svg";
import certificateIcon from "../assets/icons/certificate.svg";

const Keunggulan = () => {
  return (
    <div className='flex flex-wrap items-center gap-4 py-5 justify-evenly bg-orange'>
        <div className=''>
            <img src={flexibleIcon} className='block h-16 mx-auto' alt="" />
            <p className='text-sm font-semibold text-white'>Waktu Fleksibel</p>
        </div>
        <div>
            <img src={materiUpdateIcon} className='block h-16 mx-auto' alt="" />
            <p className='text-sm font-semibold text-white'>Materi Terupdate</p>
        </div>
        <div className=''>
            <img src={relevanIcon} className='block h-16 mx-auto' alt="" />
            <p className='text-sm font-semibold text-white'>Relevan Dengan Dunia Kerja</p>
        </div>
        <div>
            <img src={fasilitasICon} className='block h-16 mx-auto' alt="" />
            <p className='text-sm font-semibold text-white'>Fasilitas Lengkap</p>
        </div>
        <div>
            <img src={certificateIcon} className='block h-16 mx-auto' alt="" />
            <p className='text-sm font-semibold text-white'>Sertifikat Resmi Microsoft</p>
        </div>
    </div>
  )
}

export default Keunggulan