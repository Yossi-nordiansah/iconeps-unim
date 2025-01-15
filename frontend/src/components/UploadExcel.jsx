import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

const UploadExcel = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Harap pilih file terlebih dahulu.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Ambil sheet pertama
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Format data untuk dikirim ke backend
      const formattedData = sheetData.map(row => ({
        nim: String(row.nim),
        reading: row.reading,
        listening: row.listening,
        structure: row.structure
      }));

      try {
        await axios.post("http://localhost:5000/save-student-scores", { data: formattedData });
        alert("Data berhasil diunggah!");
        console.log(formattedData);
      } catch (error) {
        console.error("Error saat mengunggah data:", error);
        alert("Gagal mengunggah data.");
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2>Upload Nilai Mahasiswa</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Unggah File</button>
    </div>
  );
};

export default UploadExcel;
