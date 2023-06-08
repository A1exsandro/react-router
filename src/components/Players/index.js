import { useMemory } from "../../contexts/MemoryContext" 

const Players = () => {
	const { players } = useMemory()

	return (
		<div
      className="flex justify-around items-center bg-slate-700 text-white w-full"
    >
      {
        players.map((player, i) => 
          <div
            key={i} 
          >
            {player.name} : {player.score}
          </div>
        )
      }
    </div>
	)
}

export default Players