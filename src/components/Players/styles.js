import styled from "styled-components"

export const ContainerPlayers = styled.div`
  display: flex; 
  justify-content: space-around;
  align-items: center;
  background-color: black;
  color: white;
  width: 90%;
  height: 3.5rem;
  border-radius: 0 0 20px 20px;

  font-size: 3rem;
  font-weight: bold;

  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`
