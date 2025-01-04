import React from 'react';
import bgHero from '../assets/images/bghero.png';
import hero from '../assets/images/hero.png'

const Hero = () => {



    return (
        <div className='flex justify-center gap-10 pt-16 bg-gradient-to-b from-secondary to-transparent'>
            <div className='flex flex-wrap items-center justify-center gap-10 px-20'>
                <img src={hero} className='max-w-xl min-w-80 drop-shadow-2xl' alt="hero background" />
                <div className='max-w-screen-sm border'>
                    <p className='mx-auto mb-6 text-2xl text-center drop-shadow-2xl font-robotoExtraBold text-slate-800'>
                        Tingkatkan Strategi Belajar dan Skill Kamu. Belajar Lebih Efektif dan Fleksibel. Buat Portofolio Yang Lebih Porfessional dengan menguasai keterampilan bahasa Inggris dan Microsoft Office Bersama ICONEPS.
                    </p>
                    <button className='block px-3 py-2 mx-auto shadow-2xl bg-secondary font-robotoExtraBold text-grey rounded-xl'>Daftar Sekarang</button>
                </div>
            </div>
        </div>
    )
};

export default Hero