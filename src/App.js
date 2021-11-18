import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from './components/AddBook/AddBook';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addBook" element={<AddBook/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
