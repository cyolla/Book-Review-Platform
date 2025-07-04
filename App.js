import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddReview from './AddReview';
import AllReviews from './AllReviews';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>All Reviews</Link>
        <Link to="/add">Add Review</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllReviews />} />
        <Route path="/add" element={<AddReview />} />
      </Routes>
    </Router>
  );
}

export default App;
