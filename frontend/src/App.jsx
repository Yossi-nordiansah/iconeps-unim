import { useState } from 'react'
import axios from "axios";
import Login from './components/Login';
import Registrasi from './pages/Registrasi';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Home from './pages/Home';
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/admin' Component={Admin} />
        <Route path="*" element={
          <>
            <Navbar/>
            <Routes>
              <Route path='/iconeps-unim/' Component={Home}/>
              <Route path='/iconeps-unim/login' Component={Login} />
              <Route path='/iconeps-unim/register' Component={Registrasi} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
