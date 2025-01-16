import React, { useState } from "react";

const Kuisioner = () => {
  const [responses, setResponses] = useState({
    pertanyaan1: "",
    pertanyaan2: "",
    pertanyaan3: "",
    pertanyaan4: "",
    pertanyaan5: "",
    pertanyaan6: "",
    pertanyaan7: "",
    komentar: "",
  });

  const options = ["Sangat Baik", "Baik", "Cukup", "Kurang", "Sangat Kurang"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kuisioner Responses:", responses);
    alert("Terima kasih telah mengisi kuisioner!");
  };

  return (
    <div className="max-w-2xl max-h-screen p-4 mx-auto overflow-scroll">
      <h1 className="mb-4 text-2xl font-bold">Kuisioner Hasil Pelatihan</h1>
      <form onSubmit={handleSubmit}>
        {[
          "Apakah materi yang disampaikan sesuai dengan kebutuhan Anda?",
          "Bagaimana pendapat Anda tentang metode penyampaian materi oleh instruktur?",
          "Apakah fasilitas yang disediakan mendukung pembelajaran?",
          "Apakah instruktur pelatihan memiliki kemampuan yang baik dalam menjelaskan materi?",
          "Apakah Anda merasa ilmu yang didapatkan bisa langsung diterapkan?",
          "Apakah durasi waktu pelatihan sudah sesuai dengan materi?",
          "Secara keseluruhan, seberapa puas Anda dengan pelatihan ini?",
        ].map((pertanyaan, index) => (
          <div key={index} className="mb-6">
            <p className="mb-2 font-medium">{pertanyaan}</p>
            {options.map((option) => (
              <label key={option} className="block mb-1">
                <input
                  type="radio"
                  name={`pertanyaan${index + 1}`}
                  value={option}
                  checked={responses[`pertanyaan${index + 1}`] === option}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        <div className="mb-6">
          <label htmlFor="komentar" className="block mb-2 font-medium">
            Apa saran Anda untuk meningkatkan kualitas pelatihan ini?
          </label>
          <textarea
            id="komentar"
            name="komentar"
            value={responses.komentar}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Tulis komentar Anda di sini..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Kuisioner;
