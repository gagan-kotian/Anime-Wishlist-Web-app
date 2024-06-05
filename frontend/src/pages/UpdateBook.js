import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateBook.css";

function UpdateBook() {
  const { id } = useParams(); // Get the id from URL
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [memo, setMemo] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const info = {
      title,
      author,
      price,
    };
    try {
      const res = await axios.put(
        `http://localhost:3000/api/update/${id}`,
        info
      );
      if (res.status === 200) {
        console.log("Success");
        setMemo("Updated Successfully");
      } else {
        console.log("Failed");
        setMemo("Updating Failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setMemo("Update failed. Unable to connect to the server.");
    }
  }

  return (
    <div className="update-book-container">
      <form onSubmit={handleSubmit} className="update-book-form">
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
        <input type="submit" value="Update" className="submit-button" />
      </form>
      <p className="memo">{memo}</p>
    </div>
  );
}

export default UpdateBook;
