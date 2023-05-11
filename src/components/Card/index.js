import React, { useRef, useState } from "react" 
import { useMemory } from "../../contexts/MemoryContext"

import './styles.css'

const Card = ({ id, nameImg, linkImg, linkSound }) => {
  const { showCard, idFoundCards, idFoundPairsCards, players, currentPlayerIndex} = useMemory() 
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef()

  const flipped = idFoundCards.includes(id) || idFoundPairsCards.includes(nameImg)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }  

	const handleClick = () => { 
    if (idFoundCards.length < 2) {
      playAudio()
    }
   
    showCard({ id, nameImg })
	} 
  
  console.log(players.length)
  console.log(currentPlayerIndex)
   
	return (
		<div
			className={`card-memory ${flipped ? "" : "flipped"}`}
			onClick={handleClick}  
      id={id} 
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
      

			<div className="card-face card-front">
				<img src={linkImg} alt={`Carta ${id}`} />
        <audio ref={audioRef}>
          <source src={linkSound} />
        </audio>
			</div>

      <div className="card-face card-back"> 
         <audio ref={audioRef}>
          <source src={linkSound} />
        </audio>
      </div>
		</div>
	)
}

export default Card
