import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DisplayBooks.css";

function DisplayBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await axios.get("http://localhost:3000/api/display");
        setBooks(res.data);
        setError("");
      } catch (error) {
        console.error("Error fetching books:", error.message);
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false regardless of the outcome
      }
    }

    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error.message);
      setError("Failed to delete book. Please try again later.");
    }
  };

  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="display-books-container">
      <h1>Display Books</h1>
      {loading ? (
        <p>Loading books...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book._id} className="book-item">
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <button
                onClick={() => deleteBook(book._id)}
                className="delete-button"
              >
                Delete
              </button>
              <button
                onClick={() => navigateToUpdate(book._id)}
                className="update-button"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayBooks;
