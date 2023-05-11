import React from "react"
import { Outlet, Link } from "react-router-dom"
import { useMemory } from "../../contexts/MemoryContext"

const Layout = () => {
  const { players, currentPlayerIndex } = useMemory() 
  
    return (
      <>
        <nav>
          <div><Link to="/">Home</Link></div>
        </nav>
        
        <div className="itemsMenu">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/users">Users</Link></div>
          <div><Link to="/presence">Presence</Link></div>
          <div><Link to="/tictactoe">Jogo da Velha</Link></div>
          <div><Link to="/words">Memory Game</Link></div>
          {/* <div className="currentPlayers">{players[currentPlayerIndex].name} : {players[currentPlayerIndex].score}</div> */}
        </div>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout