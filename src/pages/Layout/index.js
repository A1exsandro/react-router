import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { useMemory } from "../../contexts/MemoryContext"
import { useUserContex } from "../../contexts/UserContext";

const Layout = () => {
  const { players, currentPlayerIndex } = useMemory() 
  const { infoUser } = useUserContex()
  const [none, setNone] = useState(false)

  const toggleMenu = () => {
    setNone(!none)
  }

  // console.log('Layout', infoUser.displayName)
  
  return (
    <>
      <nav>
        <div className="menu" onClick={toggleMenu}>Menu</div> 

        {/* <div className="currentPlayers">{players[currentPlayerIndex].name} : {players[currentPlayerIndex].score}</div> */}

        <div className="infoUser">
          <div>{infoUser.displayName}</div>
          <div className="avatarUser">
            <img src={infoUser.photoURL}/>
          </div>
        </div>
      </nav>
      
      <div className={`itemsMenu ${none ? "" : "none"}`}>
      <div onClick={toggleMenu}><Link to="/login">Login</Link></div>
        <div onClick={toggleMenu}><Link to="/">Home</Link></div>
        <div onClick={toggleMenu}><Link to="/users">Users</Link></div>
        <div onClick={toggleMenu}><Link to="/presence">Presence</Link></div>
        <div onClick={toggleMenu}><Link to="/tictactoe">Jogo da Velha</Link></div>
        <div onClick={toggleMenu}><Link to="/words">Memory Game</Link></div>
      </div>

      <Outlet />
    </>
  )
};
  
export default Layout