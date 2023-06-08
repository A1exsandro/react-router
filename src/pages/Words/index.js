import React, { useEffect, useState } from "react"
import CardList from "../../components/CardList" 
import Header from "../../components/Header"
import Players from "../../components/Players" 

import { getStorage } from '../../services/Firebase'
import { ref, getDownloadURL } from "firebase/storage" 
import { useMemory } from "../../contexts/MemoryContext"

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

const Words = () => {
  const { cards } = useMemory()
  const [images, setImages] = useState([])
  const [sounds, setSounds] = useState([])
   

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
    <div className="flex flex-col items-center">
      <Header />
      <Players />
      <CardList />
    </div>
  )
}

export default Words