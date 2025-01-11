import React, { useState } from 'react';
import axios from 'axios';

function BroadcastEmailForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/send-email', {
        subject,
        message,
      });
      alert('Email broadcast berhasil dikirim!');
      setSubject('');
      setMessage('');
    } catch (error) {
      alert('Gagal mengirim email: ' + error.message);
      console.log(error)
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-10 border rounded shadow-md">
      <h2 className="mb-4 text-xl font-bold">Broadcast Email Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Subjek:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>
        <label className="block mb-2">
          Pesan:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Kirim Email
        </button>
      </form>
    </div>
  );
}

export default BroadcastEmailForm;
