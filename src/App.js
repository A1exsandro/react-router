import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Presence from "./pages/Presence";
import TicTacToe from "./pages/TicTacToe";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="presence" element={<Presence />} />
          <Route path="tictactoe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
