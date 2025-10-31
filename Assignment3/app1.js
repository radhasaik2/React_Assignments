import React from 'react';
import { createRoot } from 'react-dom/client';

const htmlelement = document.getElementById('root');
const rootreact = createRoot(htmlelement);

const Header = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFI2_qgZYlv5Vxzc0l6h8ZOjC8oMNVVd9TQ&s"></img>
      <input type='search' placeholder='Search here'></input>
      <h2>Rapoz</h2>
    </div>
  );
}

rootreact.render(<Header />);
