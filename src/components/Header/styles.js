import styled from "styled-components"

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  opacity: 1;
  visibility: ${props => props.hiddenHeader && "hidden"};
  z-index: 4;

  /* .open {
    opacity: 1;
    visibility: visible;
  } */
`
export const ResultBox = styled.div`
  padding: 1rem 2rem;
  background-color: #333;
  border-radius: 1rem;
  text-align: center;
`