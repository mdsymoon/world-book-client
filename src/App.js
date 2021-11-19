import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import AddBook from "./components/AddBook/AddBook";
import { useEffect } from "react";
import { addBooks } from "./redux/BookList/BookListSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:4000/bookList')
        .then(res => res.json())
        .then(data =>
            dispatch(addBooks(data))
    )})
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
