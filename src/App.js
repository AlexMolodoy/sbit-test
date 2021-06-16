import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';

import AddTable from './components/addTable';
import MainTable from './components/mainTable';
import Selector from './components/selector';
import store from './store/mainStore';

const App = () => {

  useEffect(() => {
    store.downloadData();
    console.log(store.currentUser)
  }, [store.currentUser])

  return (
    <div className={'App'}>
      <header>
        <img src={logo} alt={'logo'}/>
      </header>
      <MainTable />

      <div className='selectorTableContainer'>
        <Selector />
        <AddTable />
      </div>

    </div>
  );
}

export default App;
