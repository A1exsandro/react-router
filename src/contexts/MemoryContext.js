const { createContext, useContext, useState, useEffect } = require("react")

const MemoryContext = createContext({})

export const MemoryContextProvider = (props) => { 
  const [cards, setCards] = useState([{}])
  const [openCards, setOpenCards] = useState([])
  const [idFoundCards, setIdFoundCards] = useState([])
  const [idFoundPairsCards, setIdFoundPairsCards] = useState([]) 

  const [numberOfShowCards, setNumberOfShowCards] = useState(0)
  const [score, setScore] = useState(0)
  const trying = 'Alexsandro'

  const startGame = () => { 
    // setCards(loadCards)
  }

  const ids = [idFoundCards[0], idFoundCards[1]]

  const checkCards = (open1 = ids[0], open2 = ids[1]) => {
    const nameOfId1 = cards.find(({ id, id2 }) => id === open1 || id2 === open1)?.nameImg
    const nameOfId2 = cards.find(({ id, id2 }) => id === open2 || id2 === open2)?.nameImg
   
    if (nameOfId1 === nameOfId2) {
      setIdFoundPairsCards((prev) => [...prev, nameOfId1])
    } 
  }

  const showCard = ({ id, nameImg }) => {
    // setNumberOfShowCards((amount) => amount + 1)

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
  }, 1000)

  return (
    <MemoryContext.Provider value={{ 
      openCards,
      setOpenCards,
      idFoundCards,
      setIdFoundCards,
      idFoundPairsCards,
      setIdFoundPairsCards,
      showCard,
      startGame, 
      cards,
      setCards,
      ids,
      trying 
    }}>
      {props.children}
    </MemoryContext.Provider>
  )
}

export const useMemory = () => {
  return useContext(MemoryContext)
} 
