import React from 'react';
import { createRoot } from 'react-dom/client';

const htmlelement = document.getElementById('root');
const rootreact = createRoot(htmlelement);

const Header = () => {
  return (
    <div className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFI2_qgZYlv5Vxzc0l6h8ZOjC8oMNVVd9TQ&s" alt="JJK" className="img" />
      <input type='search' placeholder='Search here' className='search'/>
      <h2 className="icon">Rapoz</h2>
    </div>
  );
}

rootreact.render(<Header />);
