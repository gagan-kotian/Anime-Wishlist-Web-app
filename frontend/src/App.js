import DisplayBooks from "./pages/DisplayBooks";
import Home from "./pages/Home";
import StoreBooks from "./pages/StoreBooks";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<StoreBooks />}></Route>
          <Route path="/display" element={<DisplayBooks />}></Route>
          <Route path="/update/:id" element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
