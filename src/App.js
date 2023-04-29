import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Presence from "./pages/Presence";
import TicTacToe from "./pages/TicTacToe";

import './App.css';
import Words from './pages/Words';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="presence" element={<Presence />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="words" element={<Words />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
