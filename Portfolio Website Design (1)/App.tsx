import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CategoryPage';
import { DetailPage } from './components/DetailPage';

export default function App() {
  return (
    <>
      {/* Google Fonts - Oswald */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;500&display=swap" 
        rel="stylesheet" 
      />
      
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/detail/:slug/:id" element={<DetailPage />} />
            {/* Catch-all route for any unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}