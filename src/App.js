import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
import "./App.css";
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
