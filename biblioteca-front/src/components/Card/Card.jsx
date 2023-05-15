import React from 'react';
import './Cards.css';
import BotaoCard from '../BotaoCard';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {

  const navigate = useNavigate();
  
  return (
    <div className="cards">
      <div className="card">
        <h2>{item.titulo}</h2>
        <p>{item.autor}</p>
        <p>{item.ano}</p>
        <BotaoCard click={() => navigate({
                    pathname: "/cadastro",
                    search: "?id=" + item.id
                        })} text="Editar">
        </BotaoCard>
      </div>
    </div>
  );
}

export default Card;
