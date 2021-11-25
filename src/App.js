import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddBook from "./components/AddBook/AddBook";
import Login from './components/Login/Login';
import BookData from "./components/BookData/BookData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/bookData" element={<BookData />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
