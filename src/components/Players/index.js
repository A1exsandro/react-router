import { useMemory } from "../../contexts/MemoryContext"
import { ContainerPlayers } from "./styles"

const Players = () => {
	const { players } = useMemory()
	

	return (
		<ContainerPlayers>
      {
        players.map((player) => 
          <div>{player.name} : {player.score}</div>
        )
      }
    </ContainerPlayers>
	)
}

export default Players