const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      {/* Spinning Circle */}
      <div className="w-14 h-14 border-4 border-gray-700 border-t-indigo-500 rounded-full animate-spin" />

      {/* Text */}
      <p className="text-gray-400 text-lg">🔍 Analyzing your image...</p>

      {/* Sub text */}
      <p className="text-gray-600 text-sm">This may take a few seconds</p>
    </div>
  );
};

export default LoadingScreen;
