import { useMemory } from "../../contexts/MemoryContext"
import { ContainerHeader, ResultBox } from "./styles"

const Header = () => {
  const { idFoundPairsCards, cards } = useMemory()

  // const gameFinish = cards.length === idFoundPairsCards.length * 2
  const gameFinish = true

  return (
    <ContainerHeader hiddenHeader={gameFinish}>
      <ResultBox>
        <div>
          <h1>Jogo da Memória</h1> 
        </div>
        <div>Jogadores:</div>
        <div>Pontos:</div>
      </ResultBox>
    </ContainerHeader>
  )
}

export default Header