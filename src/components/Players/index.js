import { useMemory } from "../../contexts/MemoryContext"
import { ContainerPlayers, ShowPlayers } from "./styles"

const Players = () => {
	const { players } = useMemory()

	return (
		<ContainerPlayers>
      {
        players.map((player, i) => 
          <ShowPlayers
            key={i} 
          >
            {player.name} : {player.score}
          </ShowPlayers>
        )
      }
    </ContainerPlayers>
	)
}

export default Players