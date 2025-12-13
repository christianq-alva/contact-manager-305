import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactDetailPage from './pages/ContactDetailPage';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/:id" element={<ContactDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}


