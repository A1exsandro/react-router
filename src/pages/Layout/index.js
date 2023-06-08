import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom" 
import { useUserContex } from "../../contexts/UserContext";

const Layout = () => { 
  const { infoUser } = useUserContex()
  const [none, setNone] = useState(false)

  const toggleMenu = () => {
    setNone(!none)
  }  

  console.log(infoUser)

  return (
    <>
      <nav className="flex justify-between items-center bg-black">
        <div 
          className="bg-black text-white px-5 py-2 hover:bg-slate-500
          hover:cursor-pointer" 
          onClick={toggleMenu}
        >
          Menu
        </div>  
        
        <div className="flex items-center py-1">
          <div className="text-orange-500 ">{infoUser?.displayName}</div>
          <div className=" ">
            <img 
              src={infoUser?.photoURL} 
              className="mx-4 bg-orange-500 rounded-full h-12"
            />
          </div>
        </div>
      </nav>
      
      <div className={` ${none ? "" : "hidden"} bg-black text-white`}>

        <div className="flex flex-col w-1/6 p-2">
          <div 
            onClick={toggleMenu} 
            className="hover:bg-slate-500 hover:cursor-pointer 
            hover:pl-4 hover:text-lime-500"
          ><Link to="/login">Login</Link></div>

          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
          ><Link to="/">Home</Link></div>

          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"  
          ><Link to="/users">Users</Link></div>

          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
          ><Link to="/presence">Presence</Link></div>

          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
          ><Link to="/tictactoe">Jogo da Velha</Link></div>

          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
            ><Link to="/words">Memory Game</Link></div>

          <div 
            onClick={toggleMenu}
            className="hover:bg-slate-500 hover:cursor-pointer
            hover:pl-4 hover:text-lime-500"
          ><Link to="/notes">Notes</Link></div>
        </div> 
      </div>

      <Outlet />
    </>
  )
};
  
export default Layout