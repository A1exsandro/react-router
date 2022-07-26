import React from "react";
import './styles.css';

const Presence = () => {
  return(
    <div className="container">
      <div className="card">
        <div className="avatar">1</div>
        <div className="info">
          <div className="presence">
            <span className="presence less">5 Faltas </span>
            <span className="presence">25 Presenças</span>
          </div>
          Alexsandro Antônio
        </div>
        <div className="button">X</div>
      </div>
    </div>
  );
}

export default Presence;