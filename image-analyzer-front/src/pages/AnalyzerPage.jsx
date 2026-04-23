import { useState } from 'react';
import axios from 'axios';
import ImageUploader from '../components/ImageUploader';
import AnalysisResult from '../components/AnalysisResult';
import LoadingScreen from '../components/LoadingScreen';

const API_URL = import.meta.env.VITE_API_URL;

const AnalyzerPage = ({ onBack }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async file => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await axios.post(`${API_URL}/api/analyze`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data.analysis);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-indigo-900">
            👁️
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">FrameX Vision</h1>
            <p className="text-gray-500 text-xs">
              AI-Powered Image Intelligence
            </p>
          </div>
        </div>
        <button
          onClick={onBack}
          className="bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-xl border border-gray-700 transition-all"
        >
          ← Back to Home
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Title */}
        {!result && !loading && !error && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Upload Your Image
            </h2>
            <p className="text-gray-400">
              Drop any photo and let the AI do the rest
            </p>
          </div>
        )}

        {/* Loading */}
        {loading && <LoadingScreen />}

        {/* Error */}
        {error && (
          <div className="bg-red-950 border border-red-700 text-red-400 rounded-2xl p-5 text-center">
            <p className="text-lg mb-1">❌ Error</p>
            <p className="text-sm">{error}</p>
            <button
              onClick={handleReset}
              className="mt-4 bg-red-900 hover:bg-red-800 text-red-300 text-sm px-5 py-2 rounded-xl border border-red-700 transition-all"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Uploader */}
        {!loading && !result && !error && (
          <ImageUploader onUpload={handleUpload} />
        )}

        {/* Result */}
        {result && !loading && (
          <>
            <AnalysisResult data={result} />
            <button
              onClick={handleReset}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all"
            >
              🔄 Analyze Another Image
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AnalyzerPage;
