import { useState } from 'react'
import axios from "axios";
import Login from './components/Login';
import Registrasi from './pages/Registrasi';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/admin' Component={Admin} />
        <Route path="*" element={
          <div>
            <Navbar/>
            <Routes>
              <Route path='/login' Component={Login} />
              <Route path='/register' Component={Registrasi} />
            </Routes>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
