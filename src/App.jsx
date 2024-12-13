import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    'Atomic Habits',
    'Project Hail Mary',
    'The Midnight Library',
    'It Ends with Us',
    'Lessons in Chemistry',
    'The Silent Patient',
    'Verity',
    'Tomorrow, and Tomorrow, and Tomorrow',
    'A Court of Silver Flames',
    'The House in the Cerulean Sea'
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Book List</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="item-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
