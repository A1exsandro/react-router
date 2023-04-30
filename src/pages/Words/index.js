import CardList from "../../components/CardList" 
import Header from "../../components/Header"
import Players from "../../components/Players"
import { ContainerWords } from "./styles"

const Words = () => {
 
  return (
    <ContainerWords>
      <Header />
      <Players />
      <CardList />
    </ContainerWords>
  )
}

export default Words