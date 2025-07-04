import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then(res => setReviews(res.data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Book Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((r, index) => (
          <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
            <h3>{r.title} by {r.author}</h3>
            <p>{r.review}</p>
            <p><strong>Rating:</strong> {r.rating}/5</p>
          </div>
        ))
      )}
    </div>
  );
}
