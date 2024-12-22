import { useState } from 'react'
import axios from "axios";
import Login from './components/Login';
import Registrasi from './pages/Registrasi';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
axios.defaults.withCredentials = true;

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/admin' Component={Admin} />
        <Route path="*" element={
          <>
            <Routes>
              <Route path='/login' Component={Login} />
              <Route path='/register' Component={Registrasi} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
