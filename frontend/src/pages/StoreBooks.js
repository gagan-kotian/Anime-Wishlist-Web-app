import React, { useState } from "react";
import axios from "axios";
import "./StoreBooks.css";

function StoreBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [memo, setMemo] = useState("");

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const info = {
      title,
      author,
      price,
    };
    try {
      const res = await axios.post("http://localhost:3000/api/store", info); // Send POST request to the correct endpoint
      if (res.status === 200) {
        console.log("Success");
        setMemo("Created Successfully");
      } else {
        console.log("Failed");
        setMemo("Uploading Failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setMemo("Upload failed. Unable to connect to the server.");
    }
  }

  return (
    <div className="store-books-container">
      <form onSubmit={handleSubmit} className="store-books-form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={title}
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          value={author}
          name="author"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          value={price}
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" value="Store" className="submit-button" />
      </form>
      <p className="memo">{memo}</p>
    </div>
  );
}

export default StoreBooks;
