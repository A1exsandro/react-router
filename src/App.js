import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useUserContex } from './contexts/UserContext'

import './App.css'

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Presence from "./pages/Presence"
import TicTacToe from "./pages/TicTacToe"
import Words from './pages/Words'
import Login from './pages/Login'
import Notes from './pages/Notes'
import LayoutNotes from './pages/LayoutNotes'


function App() {
  // const { infoUser } = useUserContex()

  return (
    <BrowserRouter> 
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/words" element={<Words />} />  
        </Route> 
        
        <Route path="/notes" element={<LayoutNotes />}> 
          <Route path="/notes" element={<Notes />} /> 
        </Route> 
      </Routes> 
    </BrowserRouter>    
  );
}

export default App;
