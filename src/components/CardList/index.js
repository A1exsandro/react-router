import React, { useEffect, useState } from "react"
import { useMemory } from "../../contexts/MemoryContext" 
import Card from "../Card"
import CardTwo from "../Card/CardTwo"  
import { CardListContainer } from "./styles"

const CardList = () => { 
  const { cards, loading, setLoading, setShuffle, shuffle } = useMemory() 
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
  }, [shuffle]); 

 console.log('newCards', newCards)

 const handleClick = () => {
  setLoading(false)
}

console.log('cards', cards)

  return (
    loading ? (
      <div>
        <button onClick={handleClick}>Iniciar o Jogo</button> 
        <button onClick={() => setShuffle(!shuffle)}>Embaralhar</button>
      </div>
    ) : (
      <CardListContainer> 
        {newCards.map((card) => (
          <Card key={card.id} {...card} /> 
        ))}
  
        {newCards.map((card) => ( 
            <CardTwo key={card.id2} {...card} />
          ))} 
      </CardListContainer>
    )
  );
};

export default CardList

