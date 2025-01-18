import React from 'react'
import Hero from '../components/Hero'
import IconepsIntro from '../components/IconepsIntro'
import Keunggulan from '../components/Keunggulan'
import BroadcastEmailForm from '../components/BroadcastEmailForm'
import UploadExcel from '../components/UploadExcel'
import Kuisioner from '../components/Kuisioner'
import Login from '../components/Login'
import Registrasi from './Registrasi'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Keunggulan/>
        <BroadcastEmailForm/>
        <IconepsIntro/>
        <UploadExcel/>
        {/* <Kuisioner/>
        <Login/>
        <Registrasi/>
        //bisa hibrid bisa online */}
    </div>
  )
}

export default Home