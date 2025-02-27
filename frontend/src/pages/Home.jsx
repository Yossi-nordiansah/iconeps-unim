import React from 'react'
import Hero from '../components/Hero'
import IconepsIntro from '../components/IconepsIntro'
import Keunggulan from '../components/Keunggulan'
import BroadcastEmailForm from '../components/BroadcastEmailForm'
import UploadExcel from '../components/UploadExcel'
import Kuisioner from '../components/Kuisioner'
import Pusbas from '../components/Pusbas'
import ProgramContainer from '../components/ProgramContainer'
import Alur from '../components/Alur'
import Pertanyaan from '../components/Pertanyaan';
import Footer from '../components/Footer'
// import Login from '../components/Login'
// import Registrasi from './Registrasi'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Keunggulan/>
        <IconepsIntro/>
        <ProgramContainer/>
        <Alur/>
        <Pertanyaan/>
        <Footer/>
    </div>
  )
}

export default Home