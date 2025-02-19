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
            answer: "Untuk Biaya Pendaftaran program PUSBAS adalah Rp 320.000 sedangkan untuk program PUSKOM adalah Rp 440.000.",
            action: false,
        },
        {
            id: 2,
            question: 'Apakah program pusbas dan puskom wajib bagi mahasiswa?',
            answer: `Ya, Program ini merupakan program yang wajib diikuti bagi seluruh mahasiswa Universitas Islam Majapahit. Sertifikat ICONEPS merupakan syarat kelulusan bagi mahasiswa.`,
            action: false,
        },
        {
            id: 3,
            question: "Dimana lokasi ruangan iconeps?",
            answer: `Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.

            Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.`,
            action: false,
        },
        {
            id: 4,
            question: "Apa perbedaan kelas weekend dan weekday?",
            answer: `Perbedaan kelas weekend dan weekday terletak pada waktu pelatihan, pada kelas weekday pelatihan akan dilaksanakan pada hari biasa sedangkan pada kelas weekend pelatihan dilaksanakan pada hari Sabtu dan Minggu.`,
            action: false,
        },
        {
            id: 5,
            question: "Bagaimana jika tidak lulus pada saat ujian?",
            answer: `Apabila peserta tidak memenuhi syarat nilai yang ditetapkan maka peserta dinyatakan tidak lulus ujian. Bagi peserta yang tidak lulus akan mendapat kesempatan Remidial satu kali, dan jika dalam Remidial peserta tetap tidak memenuhi nilai yang ditetapkan maka peserta dikenakan biaya administrasi tambahan untuk mengikuti Remidial berikutnya.`,
            action: false,
        },
        {
            id: 6,
            question: "Apa perbedaan kelas online dan offline?",
            answer: `Perbedaan kelas offline dan kelas online adalah jika kelas Online maka seluruh kegiatan pelatihan akan dilaksanakan secara daring sedangkan untuk kelas offline kegiatan pelatihan akan dilaksanakan secara daring dan luring (Hybrid).`,
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
        <div className=" bg-gradient-to-b from-blue-700 to-blue-950">
            <div className='lg:w-11/12 sm:w-[93%] w-[88%] mx-auto lg:py-10 sm:py-8 py-6'>
                {
                    questionsList.map((item) =>
                    (
                        <div key={item.id} className={`mb-2 duration-300 `}>
                            <div onClick={() => handleQuestionOnClick(item.id)} className='flex items-center justify-between w-full px-6 py-2 rounded-xl lg:px-8 lg:py-3 bg-primary'>
                                <p className='text-white font-radjdhani_bold sm:text-2xl'>{item.question}</p>
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