import React from "react";
import registrasi from "../assets/images/registrasi.png";
import alur from "../assets/images/alur4.gif";
import pendaftaran from "../assets/images/daftar.png";
import waiting from "../assets/images/waiting.png";
import pelatihan from "../assets/images/certificate.png"

const Alur = () => {

    return (
        <div className="px-4 py-6 md:px-10">
            <h1 className="mb-10 text-3xl underline font-robotoExtraBold text-blue-950">Alur Pelatihan ICONEPS</h1>
            <div className="flex flex-col-reverse items-start justify-between md:flex-row">
                <div className="md:w-1/2">
                    <div>
                        <div className="flex items-center gap-6">
                            <div className="p-1 bg-blue-500 border-4 rounded-full w-fit border-primary">
                                <img src={registrasi} alt="" className="w-6" />
                            </div>
                            <h1 className="text-xl font-montserrat_extrabold text-blue-950">Melakukan Registrasi</h1>
                        </div>
                        <ol className="pb-1 pl-12 mt-1 ml-5 space-y-2 text-sm list-decimal list-inside border-l-2 border-gray-400 text-blue-950 font-montserrat_extrabold">
                            <li>Lakukan registrasi pada website ini</li>
                            <li>isi formulir registrasi</li>
                            <li>submit formulir</li>
                        </ol>
                    </div> 
                    <div>
                        <div className="flex items-center gap-6 mt-2">
                            <div className="p-1 bg-blue-500 border-4 rounded-full w-fit border-primary">
                                <img src={pendaftaran} alt="" className="w-6" />
                            </div>
                            <h1 className="text-xl font-montserrat_extrabold text-blue-950">Melakukan Pendaftaran Program</h1>
                        </div>
                        <ol className="pb-1 pl-12 mt-1 ml-5 space-y-2 text-sm list-decimal list-inside border-l-2 border-gray-400 text-blue-950 font-montserrat_extrabold">
                            <li>pilih program (pusbas/puskom)</li>
                            <li>lakukan pembayaran</li>
                            <li>simpan bukti pembayaran</li>
                            <li>isi form pendaftaran</li>
                            <li>submit</li>
                        </ol>
                    </div> 
                    <div>
                        <div className="flex items-center gap-6 mt-2">
                            <div className="p-1 bg-blue-500 border-4 rounded-full w-fit border-primary">
                                <img src={waiting} alt="" className="w-6" />
                            </div>
                            <h1 className="text-xl font-montserrat_extrabold text-blue-950">Melakukan Pendaftaran Program</h1>
                        </div>
                        <ol className="pb-1 pl-12 mt-1 ml-5 space-y-2 text-sm list-decimal list-inside border-l-2 border-gray-400 text-blue-950 font-montserrat_extrabold">
                            <li>pilih program (pusbas/puskom)</li>
                            <li>lakukan pembayaran</li>
                            <li>simpan bukti pembayaran</li>
                            <li>isi form pendaftaran</li>
                            <li>submit</li>
                        </ol>
                    </div> 
                    <div>
                        <div className="flex items-center gap-6 mt-2">
                            <div className="p-1 bg-blue-500 border-4 rounded-full w-fit border-primary">
                                <img src={pelatihan} alt="" className="w-6" />
                            </div>
                            <h1 className="text-xl font-montserrat_extrabold text-blue-950">Melakukan Pendaftaran Program</h1>
                        </div>
                        <ol className="pb-1 pl-12 mt-1 ml-5 space-y-2 text-sm list-decimal list-inside border-l-2 border-gray-400 text-blue-950 font-montserrat_extrabold">
                            <li>Waktu pelatihan akan disesuaikan dengan kelas yang anda ikuti (weekend/weekday)</li>
                            <li>Jika anda lulus, seritifkat bisa didownload melalui website ini</li>
                            <li>Jika tidak lulus, maka status anda akan menjadi Remidi</li>
                        </ol>
                    </div> 
                </div>
                <img src={alur} alt="" className="mx-auto md:w-1/2"/>
            </div>

        </div>
    )
}

export default Alur