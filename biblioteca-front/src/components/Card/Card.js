import React from 'react';
import './Cards.css';

function Card({ item }) {
  return (
    <div className="cards">
      <div className="card">
        <h2>{item.titulo}</h2>
        <p>{item.autor}</p>
        <p>{item.ano}</p>
      </div>
    </div>
  );
}

export default Card;
