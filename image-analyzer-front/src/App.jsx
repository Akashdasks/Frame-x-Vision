import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AnalyzerPage from './pages/AnalyzerPage';

const App = () => {
  const [started, setStarted] = useState(false);

  return started ? (
    <AnalyzerPage onBack={() => setStarted(false)} />
  ) : (
    <LandingPage onStart={() => setStarted(true)} />
  );
};

export default App;
