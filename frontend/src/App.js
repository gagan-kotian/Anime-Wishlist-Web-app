import DisplayBooks from "./pages/DisplayBooks";
import Home from "./pages/Home";
import StoreBooks from "./pages/StoreBooks";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<StoreBooks />}></Route>
          <Route path="/display" element={<DisplayBooks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
