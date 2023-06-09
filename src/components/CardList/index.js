import React, { useEffect, useState } from "react"
import { useMemory } from "../../contexts/MemoryContext" 
import Card from "../Card"
import CardTwo from "../Card/CardTwo"   

const CardList = () => { 
  const { cards, loading, setLoading } = useMemory() 
  const [newCards, setNewCards] = useState([{}])

  useEffect(() => {
    const shuffleCards = (cards) => {
      let currentIndex = cards.length;
      let randomIndex;
  
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] = [
          cards[randomIndex],
          cards[currentIndex],
        ];
      }
  
      return cards;
    };
  
    setNewCards(shuffleCards(cards));
  }, [cards]); 

 console.log('newCards', newCards)

 const handleClick = () => {
  setLoading(false)
}

console.log('cards', cards)

  return (
    loading ? (
      <button onClick={handleClick}>Iniciar o Jogo</button> 
    ) : (
      <div
        className="flex flex-wrap justify-center gap-2 p-2"
      > 
        {newCards.map((card) => (
          <Card key={card.id} {...card} /> 
        ))}
  
        {newCards.map((card) => ( 
            <CardTwo key={card.id2} {...card} />
          ))} 
      </div>
    )
  );
};

export default CardList

