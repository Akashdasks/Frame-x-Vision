import { useState } from 'react';

const ImageUploader = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);

  // Handle file selection
  const handleFile = selectedFile => {
    if (!selectedFile) return;
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleChange = e => handleFile(e.target.files[0]);

  const handleDrop = e => {
    e.preventDefault();
    setDrag(false);
    handleFile(e.dataTransfer.files[0]);
  };

  // Submit
  const handleSubmit = () => {
    if (file) onUpload(file);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Drop Zone */}
      <div
        onDragOver={e => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
        className={`w-full border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300
          ${
            drag
              ? 'border-indigo-400 bg-indigo-950'
              : 'border-gray-600 bg-gray-800 hover:border-indigo-500 hover:bg-gray-750'
          }`}
      >
        {/* Icon */}
        <div className="text-5xl mb-3">🖼️</div>

        {/* Text */}
        <p className="text-gray-300 text-lg font-semibold">
          Drag & drop your image here
        </p>
        <p className="text-gray-500 text-sm mt-1">or click to browse</p>
        <p className="text-gray-600 text-xs mt-3">
          Supports: JPEG, PNG, WEBP, GIF — Max 10MB
        </p>

        {/* Hidden Input */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>

      {/* Preview */}
      {preview && (
        <div className="w-full flex flex-col items-center gap-4">
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-72 object-contain rounded-xl border border-gray-700"
          />
          <p className="text-gray-400 text-sm">📁 {file.name}</p>

          {/* Analyze Button */}
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 w-full"
          >
            🔍 Analyze Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
