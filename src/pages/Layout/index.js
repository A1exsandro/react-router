import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { useMemory } from "../../contexts/MemoryContext"

const Layout = () => {
  const { players, currentPlayerIndex } = useMemory() 
  const [none, setNone] = useState(false)

  const toggleMenu = () => {
    setNone(!none)
  }
  
    return (
      <>
        <nav>
          <div className="menu" onClick={toggleMenu}>Menu</div> 
        </nav>
        
        <div className={`itemsMenu ${none ? "" : "none"}`}>
        <div onClick={toggleMenu}><Link to="/login">Login</Link></div>
          <div onClick={toggleMenu}><Link to="/">Home</Link></div>
          <div onClick={toggleMenu}><Link to="/users">Users</Link></div>
          <div onClick={toggleMenu}><Link to="/presence">Presence</Link></div>
          <div onClick={toggleMenu}><Link to="/tictactoe">Jogo da Velha</Link></div>
          <div onClick={toggleMenu}><Link to="/words">Memory Game</Link></div>
          {/* <div className="currentPlayers">{players[currentPlayerIndex].name} : {players[currentPlayerIndex].score}</div> */}
        </div>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout