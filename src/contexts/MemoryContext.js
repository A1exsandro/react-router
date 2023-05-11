const { createContext, useContext, useState, useEffect } = require("react")

const MemoryContext = createContext({})

export const MemoryContextProvider = (props) => { 
  const [cards, setCards] = useState([{}])
  const [openCards, setOpenCards] = useState([])
  const [idFoundCards, setIdFoundCards] = useState([])
  const [idFoundPairsCards, setIdFoundPairsCards] = useState([]) 
 
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [players, setPlayers] = useState([
    {
      name: 'Alexsandro ',
      score: 0,
      current: false
    },
    {
      name: 'Adriana ',
      score: 0,
      current: false
    },
    {
      name: 'Kemilly ',
      score: 0,
      current: false
    },
    {
      name: 'Alexia ',
      score: 0,
      current: false
    }
  ])

  // TO CHECK IF THE CARDS ARE THE SAME
  const ids = [idFoundCards[0], idFoundCards[1]]
  const checkCards = (open1 = ids[0], open2 = ids[1]) => {
    
    const nameOfId1 = cards.find(({ id, id2 }) => id === open1 || id2 === open1)?.nameImg
    const nameOfId2 = cards.find(({ id, id2 }) => id === open2 || id2 === open2)?.nameImg
   
    if (nameOfId1 === nameOfId2) { 
      setIdFoundPairsCards((prev) => [...prev, nameOfId1])
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers]
        updatedPlayers[currentPlayerIndex] = {
          ...prevPlayers[currentPlayerIndex],
          score: prevPlayers[currentPlayerIndex].score + 0.5,
        }
        return updatedPlayers
      })
    } else {
      if (currentPlayerIndex < 3) {
        setCurrentPlayerIndex((amount) => amount + 0.5)
      } else {
        setCurrentPlayerIndex(0)
      }
    }
  }

  // SHUFFLECARDS
  // const shuffleCards = (cards) => {
  //   for (let i = cards.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [cards[i], cards[j]] = [cards[j], cards[i]];
  //   }
  //   return cards;
  // }

  // const startGame = () => { 
  //   // setCards(loadCards)
  //   const shuffledCards = shuffleCards(cards)
  //   setCards(shuffledCards)
  // }

  useEffect(() => {
    // startGame()
  })

  const showCard = ({ id, nameImg }) => {
    
    const turnedCard = idFoundCards.includes(id) || idFoundPairsCards.includes(nameImg)
    if (turnedCard) return

    if (idFoundCards.length < 2) {
      setIdFoundCards((prev) => [...prev, id]) 
    }

    // const time = someCards ? 0 : 2000
  }

  setTimeout(() => {
    if (idFoundCards.length > 1) { 
      checkCards()
      setIdFoundCards([])
    } 
  }, 2000)

  return (
    <MemoryContext.Provider value={{ 
      openCards,
      setOpenCards,
      idFoundCards,
      setIdFoundCards,
      idFoundPairsCards,
      setIdFoundPairsCards,
      showCard,  
      cards,
      setCards,
      ids, 
      players,
      currentPlayerIndex
    }}>
      {props.children}
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
} 
