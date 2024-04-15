import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../actions';

function BookList() {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  }

  return (
    <div>
      <h1>Book List</h1>
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.name}</h2>
          <p>Price: {book.price}</p>
          <p>Category: {book.category}</p>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
          <Link to={`/edit/${book.id}`}>Edit</Link>
        </div>
      ))}
      <Link to="/add">Add Book</Link>
    </div>
  );
}

export default BookList;
