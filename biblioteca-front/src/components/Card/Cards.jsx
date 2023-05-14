import React, { useState, useEffect } from 'react';
import Card from './Card';
import data from './data.json';

function Cards() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.items);
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


