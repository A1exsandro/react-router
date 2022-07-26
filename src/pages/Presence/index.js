import React, { useState } from "react";
import './styles.css';

const Presence = () => {
  const [cards, setCards] = useState([
    {
      name: 'Alex',
      id: 1,
      presence_less: 3,
      presence_plus: 15
    }
  ]);

  return(
    <div className="container">
      <div className="card">
        <div className="avatar">{cards[0].id}</div>
        <div className="info">
          <div className="presence">
            <span className="presence less">{cards[0].presence_less} Faltas </span>
            <span className="presence">{cards[0].presence_plus} Presenças</span>
          </div>
          {cards[0].name}
        </div>
        <div className="button">X</div>
      </div>
    </div>
  );
}

export default Presence;