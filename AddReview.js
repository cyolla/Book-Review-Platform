import { useState } from 'react';
import axios from 'axios';

export default function AddReview() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    review: '',
    rating: 5
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/reviews', form);
    alert('✅ Review submitted!');
    setForm({ title: '', author: '', review: '', rating: 5 });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Book Title" required /><br /><br />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" required /><br /><br />
      <textarea name="review" value={form.review} onChange={handleChange} placeholder="Write your review" required /><br /><br />
      <input type="number" name="rating" value={form.rating} onChange={handleChange} min="1" max="5" /><br /><br />
      <button type="submit">Submit Review</button>
    </form>
  );
}
