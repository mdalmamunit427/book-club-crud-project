import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import BookDetails from "./pages/singlebooks/BookDetails.jsx";
import EditBook from "./pages/editBook/EditBook.jsx";
import AddBook from "./pages/addBook/AddBook.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Shop />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/add" element={<AddBook />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
