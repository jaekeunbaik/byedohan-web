import './App.css';
import './index.css';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from '@/routes/Home';
import NotFound from '@/routes/NotFound';
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 404 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
