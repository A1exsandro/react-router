import { useState } from "react"

const CardOfNotes = ({ front, back}) => {
  const [flipped, setFlipped] = useState(true)

  const handleFlip = () => {
    setFlipped(!flipped)
  } 


  return (
    <div 
      className={`card-memory ${flipped ? "" : "flipped"}`} 
      onClick={handleFlip}
    > 
      <div className="card-face card-front">
        {front} 
      </div>

      <div className="card-face card-back"> 
        {back} 
      </div>
    </div>
  )
}

export default CardOfNotes
