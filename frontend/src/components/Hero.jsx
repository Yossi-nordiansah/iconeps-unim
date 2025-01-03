import React from 'react';
import bgHero from '../assets/images/bghero.png';
import hero from '../assets/images/hero.png'

const Hero = () => {



    return (
        <div className='h-[1000px] flex justify-center gap-10 py-10 bg-gradient-to-b from-primary to-transparent'>
            <img src={hero} className='max-w-[45%] min-w-20 drop-shadow-2xl' alt="hero background" />
            <div className='w-1/2'>
                <p>
                    Tingkatkan strategi belajar dan hasil akademik Anda. Hemat waktu dan tenaga dengan belajar lebih efektif. Raih dampak yang lebih besar dengan menguasai keterampilan bahasa Inggris dan Microsoft Office bersama ICONEPS.
                </p>
                <button></button>
            </div>
        </div>
    )
};

export default Hero