import { useState } from 'react'
import axios from "axios";
import Login from './components/Login';
import Daftar from './pages/Daftar';
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='static'>
      {/* <Login/> */}
      <Daftar/>
    </div>
  )
}

export default App
