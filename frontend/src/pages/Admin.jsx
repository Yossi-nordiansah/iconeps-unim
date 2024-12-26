import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Admin = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    refreshToken()
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log(decoded);
      setName(decoded.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      welcome back {name}
    </div>
  )
}

export default Admin