import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      <form onSubmit={handleSubmit}>
        Title:
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        Author:
        <input
          type="text"
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        Price:
        <input
          type="text"
          value={price}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" value="Update" />
      </form>
      <p>{memo}</p>
    </div>
  );
}

export default UpdateBook;
