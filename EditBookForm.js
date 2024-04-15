import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../actions';

function EditBookForm({ match }) {
  const dispatch = useDispatch();
  const bookId = match.params.id;
  const book = useSelector(state => state.books.find(book => book.id === bookId));
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: bookId, name, price, category, description }));
  }

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditBookForm;
