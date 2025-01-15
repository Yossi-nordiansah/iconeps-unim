import React from 'react'
import Hero from '../components/Hero'
import IconepsIntro from '../components/IconepsIntro'
import Keunggulan from '../components/Keunggulan'
import BroadcastEmailForm from '../components/BroadcastEmailForm'
import UploadExcel from '../components/UploadExcel'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Keunggulan/>
        {/* <BroadcastEmailForm/> */}
        <IconepsIntro/>
        <UploadExcel/>
    </div>
  )
}

export default Home