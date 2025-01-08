import React from 'react';
import bg_1 from '../assets/images/A.png'
import bg_2 from '../assets/images/B.png'
import bg_3 from '../assets/images/C.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const Hero = () => {

    return (
        <div className='relative flex justify-center h-screen'>
            <Swiper
                modules={[Autoplay]}
                speed={1500}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <img src={bg_1} className='brightness-[0.4] object-cover min-h-screen' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <img src={bg_2} className='brightness-[0.5] object-cover w-fit min-h-screen' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-screen">
                        <img src={bg_3} className='brightness-[0.6] object-cover w-fit min-h-screen' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='sm:max-w-[80%] w-11/12 absolute z-10 top-1/2 -translate-y-1/2'>
                <p className='mx-auto mb-6 text-3xl text-center text-white drop-shadow-custom-light font-radjdhani_bold sm:text-4xl'>
                    Tingkatkan Strategi Belajar dan Skill Kamu. Belajar Lebih Efektif dan Fleksibel. Buat Portofolio Yang Lebih Professional dengan Dibekali keterampilan Bahasa Inggris dan Microsoft Office.
                </p>
                <button className='block px-3 py-2 mx-auto text-xl text-white shadow-custom-light xl:text-base bg-orange font-robotoExtraBold rounded-xl'>Daftar Sekarang</button>
            </div>
        </div>
    )
};

export default Hero