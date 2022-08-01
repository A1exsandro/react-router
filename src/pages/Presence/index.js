import React, { useState } from "react";
import './styles.css';

const Presence = () => {
  const [cards, setCards] = useState([
    {
      name: 'Alex',
      id: 1,
      presence_less: 0,
      presence_plus: 15
    },
    {
      name: 'Sandro',
      id: 2,
      presence_less: 0,
      presence_plus: 17
    },
    {
      name: 'Antônio',
      id: 3,
      presence_less: 0,
      presence_plus: 10
    },
    {
      name: 'Alexsandro',
      id: 4,
      presence_less: 0,
      presence_plus: 30
    },
  ]);

  const p_less = (card) => {
    setCards(cards.map((item) => {
      if(item.id === card.id){
        return {...item, presence_less: item.presence_less + 1}
      }
      return item;
    }))
  }

  const p_plus = (card) => {
    setCards(cards.map((item) => {
      if(item.id === card.id){
        return {...item, presence_plus: item.presence_plus + 1}
      }
      return item;
    }))
  }

  console.log(cards);

  return(
    <main>
      <div className="container">
        {
          cards.map((card, index) => (
            <div key={index} className="card">
              <div className="avatar">{index + 1}</div>
              <div className="info">
                <div className="presence">
                  <span onClick={() => p_less(card)} className="presence less">{card.presence_less} Faltas </span>
                  <span onClick={() => p_plus(card)} className="presence">{card.presence_plus} Presenças</span>
                </div>
                {card.name}
              </div>
              <div className="button">X</div>
            </div>    
        ))
        } 
      </div> 
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Presenças</th>
              <th>Faltas</th>
            </tr>
          </thead>
          <tbody>
            {
              cards.map((card, index) =>(
                <tr key={index}>
                  <td>{card.id}</td>
                  <td>{card.name}</td>
                  <td>{card.presence_plus}</td>
                  <td>{card.presence_less}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Presence;
