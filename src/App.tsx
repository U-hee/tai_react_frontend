import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrendingList } from './components/TrendingList';
import { TrendingDetail } from './components/TrendingDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<TrendingList />} />
          <Route path="/trend/:id" element={<TrendingDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
