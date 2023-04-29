import { useMemory } from "../../contexts/MemoryContext" 
import Card from "../Card"
import CardTwo from "../Card/CardTwo"
import { CardListContainer } from "./styles"

const CardList = () => { 
  const { cards } = useMemory() 

  return (
    <CardListContainer>
      {cards.map((card) => (
        <Card key={card.id} {...card} /> 
      ))}

      {cards.map((card) => ( 
          <CardTwo key={card.id2} {...card} />
        ))}
    </CardListContainer>
  );
};

export default CardList