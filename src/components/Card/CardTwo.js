import React, { useRef, useState } from "react" 
import { useMemory } from "../../contexts/MemoryContext"

import './styles.css'

const CardTwo = ({ id2, nameImg, linkSound }) => {
  const { showCard, idFoundCards, idFoundPairsCards } = useMemory() 
	const [hovered, setHovered] = useState(false)
  const audioRef = useRef(null)
  
  const id = id2
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

	return (
		<div
			className={`card-memory ${flipped ? "" : "flipped"}`}
			onClick={() => handleClick()}  
      id={id}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>

			<div className="card-face card-front">
				<h2 className="title-card">{nameImg}</h2>
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

export default CardTwo