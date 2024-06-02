import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h1>DisplayBooks</h1>
      {loading ? (
        <p>Loading books...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayBooks;
