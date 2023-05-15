import React, { useState, useEffect } from 'react';
import Card from './Card';
import data from './data.json';

function Cards() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books/").then(response => response.json())
    .then(data => {
      const items = []
      data.map(i => {
        items.push({
            "id": i.livcodigo,
            "titulo": i.livtitulo,
            "autor": i.livautor,
            "ano": i.livano
        })
        setItems(items)
      })
    });
    //setItems(data.items);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cards;

// import React, { useState, useEffect } from 'react';
// import Card from './Card';

// function Cards() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // busca os dados do banco de dados
//     const fetchData = async () => {
//       const response = await fetch('http://exemplo.com/api/data');
//       const data = await response.json();
//       setItems(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {items.forEach((item) => (
//         <Card key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }

// export default Cards;


