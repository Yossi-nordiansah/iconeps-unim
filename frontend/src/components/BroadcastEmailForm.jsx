import React, { useState } from 'react';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

function BroadcastEmailForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(isSubmitting) return;

    setIsSubmitting(true);

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
    }finally{
      setIsSubmitting(false);
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
          <ReactQuill
            theme="snow"
            value={message}
            onChange={setMessage}
            placeholder="Tulis pesan Anda di sini..."
          />
        </label>
        <button type="submit" className={`p-2 text-white ${isSubmitting? 'bg-blue-400' : 'bg-blue-800'} rounded`} disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim'}
        </button>
      </form>
    </div>
  );
}

export default BroadcastEmailForm;
