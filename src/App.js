import React, { useState, useEffect } from 'react';

import CardList from './components/Card-list/Card-list.component';
import SearchBox from './components/Search-bar/Search-box.component';
import './App.css';

const App = () => {
  console.log('Render'); 
  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); 

  console.log(searchField); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setFilteredMonsters(newFilteredMonsters)

  }, [monsters, searchField])

  const onChangeHandeler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString); 
  }

  return ( 
    <div className='App'>
      <h1 className='app-title'>My First Ever Complete REACT SPA</h1>
      <SearchBox
          className = 'search-box'
          onChange={onChangeHandeler}
          placeholder='search monsters'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}



export default App;
