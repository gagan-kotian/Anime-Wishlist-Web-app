import React, { useState } from "react";
import axios from "axios";

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
        <input type="submit" value="Store" />
      </form>
      <p>{memo}</p>
    </div>
  );
}

export default StoreBooks;
