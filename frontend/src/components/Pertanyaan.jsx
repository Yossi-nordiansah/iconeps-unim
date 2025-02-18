import { useState, useRef } from "react";
import React from 'react';
import arrow from "../assets/icons/arrow4.svg"

const Pertanyaan = () => {
    const inputRef = useRef();
    const focusRef = useRef();

    const handleInputOnFocus = () => {
        if(window.screen.availWidth <= 640){
            inputRef.current.style.fontSize = '12px';
            inputRef.current.style.top = '3px';
        }
        else if(window.screen.availWidth >640){
            inputRef.current.style.fontSize = '13px';
            inputRef.current.style.top = '9px';
        }
    }
    const handleInputOnBlur = () => {
        if(window.screen.availWidth <= 640){
            inputRef.current.style.fontSize = '16px';
            inputRef.current.style.top = '13px';
        }
        else if(window.screen.availWidth >640){
            inputRef.current.style.fontSize = '18px';
            inputRef.current.style.top = '17px';
        }
    }

    const handlePlaceHolderOnFocused = () => {
        focusRef.current.focus();
    }
    const [questionsList, setQuestionsList] = useState([
        {
            id: 1,
            question: 'Berapa biaya untuk mendaftar program pelatihan?',
            answer: "Untuk Biaya Pendaftaran program PUSBAS adalah Rp 320.000 sedangkan untuk program PUSKOM adalah Rp 440.000",
            action: false,
        },
        {
            id: 2,
            question: 'Berapa biaya berlangganan Netflix?',
            answer: `Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp 54.000 hingga Rp 186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.`,
            action: false,
        },
        {
            id: 3,
            question: "Di mana saya bisa menonton?",
            answer: `Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.

            Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.`,
            action: false,
        },
        {
            id: 4,
            question: "Bagaimana cara membatalkannya?",
            answer: `Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun.`,
            action: false,
        },
        {
            id: 5,
            question: "Apa yang bisa ditonton di netflix?",
            answer: `Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.`,
            action: false,
        },
        {
            id: 6,
            question: "Apakah Netflix sesuai bagi anak-anak?",
            answer: `Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah.

            Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak..`,
            action: false,
        },
    ]);

    const [open, setOpen] = useState(false);

    const handleQuestionOnClick = (id) => {
        if (questionsList.find((items) => items.id === id)) {
            setQuestionsList(questionsList.map((item) => (item.id === id ? { ...item, action: !item.action } : { ...item, action: false })));
        }
    }
    return (
        <div>
            <div className='lg:w-11/12 sm:w-[93%] w-[88%] mx-auto lg:mt-4 sm:mt-8 mt-6'>
                {
                    questionsList.map((item) =>
                    (
                        <div key={item.id} className={`mb-2 duration-300 `}>
                            <div onClick={() => handleQuestionOnClick(item.id)} className='rounded-xl flex justify-between items-center w-full lg:px-8 px-6 lg:py-3 py-2 bg-primary'>
                                <p className='font-radjdhani_bold sm:text-2xl text-white'>{item.question}</p>
                                <img src={arrow} alt="" className={`${item.action ? 'rotate-180 duration-100' : 'rotate-90 duration-100'} sm:w-10 w-7`} />
                            </div>
                            <div className={`sm:px-8 px-6 z-10 duration-500 overflow-hidden mt-[2px] bg-primary rounded-b-xl`}>
                                <p className={` ${item.action ? 'max-h-96 my-2 duration-500' : 'max-h-0'} text-white text-justify duration-300 sm:text-2xl font-radjdhani_bold`}>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Pertanyaan