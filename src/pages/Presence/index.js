import React, { useState } from "react";
import './styles.css';

const Presence = () => {
  const [cards, setCards] = useState([
    {
      name: 'Alex',
      id: 1,
      presence_less: 3,
      presence_plus: 15
    },
    {
      name: 'Sandro',
      id: 2,
      presence_less: 2,
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

  return(
    <main>
      <div className="container">
        {
          cards.map((card, index) => (
            <div key={index} className="card">
              <div className="avatar">{card.id}</div>
              <div className="info">
                <div className="presence">
                  <span className="presence less">{card.presence_less} Faltas </span>
                  <span className="presence">{card.presence_plus} Presenças</span>
                </div>
                {card.name}
              </div>
              <div className="button">X</div>
            </div>    
        ))
        } 
      </div> 
    </main>
  );
}

export default Presence;