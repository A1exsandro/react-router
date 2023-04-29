// import { pairsOfCards } from "../../Utils/cards_2";
import { useEffect, useState } from "react";
import { useMemory } from "../../contexts/MemoryContext"; 
import Card from "../Card";
import { CardListContainer } from "./styles";

import { getStorage } from '../../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 
import CardTwo from "../Card/CardTwo";

const storage = getStorage() 

const data = [
  'butterfly',
  'avocado',
  'banana',
  'bathroom',
  'bedroom',
  'breakfast',
  'bridge',
  'brothers', 
  'closed',
  'cook',
  'dance',
  'eat',
  'fear',
  'fire',
  'film',
  'fruits',
  'kitchen',
  'night',
  'read',
  'open',
  'marketplace',
  'play',
  'smell',
  'sleep',
  'plant',
  'tired'
] 
console.log('here in cards')

const CardList = () => { 
  const { cards } = useMemory()
  const [images, setImages] = useState([])
  const [sounds, setSounds] = useState([])

  // const image = [{}]

  // console.log('make obj', image)

  const promises = data.map((dt) => (
    getDownloadURL(ref(storage, `images/${dt}.jpeg`))
  ))
  
  const audioPromises = data.map((dt) => (
    getDownloadURL(ref(storage, `audio/${dt}.mp3`))
  ))

  useEffect(() => {
    Promise.all(promises)
      .then((urls) => setImages(urls))

    Promise.all(audioPromises)
      .then((audios) => setSounds(audios))
      // setCards(image)
  },[])

  for (let i = 0; i < data.length; i++) {
    cards[i] = {
      id: i + 1,
      id2: (i + 1) * -1,
      nameImg: data[i],
      linkImg: images[i],
      linkSound: sounds[i]
    }
  } 

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