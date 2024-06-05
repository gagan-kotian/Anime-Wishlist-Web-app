import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Book Store</h1>
      </div>
      <div className="main-content">
        <p>
          Welcome to our bookstore! Explore our vast collection of books and
          find your next favorite read.
        </p>
        <button className="button">Browse Books</button>
      </div>
    </div>
  );
}

export default Home;
