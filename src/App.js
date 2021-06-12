import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';

import AddTable from './components/addTable';
import MainTable from './components/mainTable';
import Selector from './components/selector';


const App = () => {

  const [state, setstate] = useState(null);
  let fetchInterval = () => setInterval(()=>
    fetch('http://api.sbit500.pro/api/testjob?id_user=' + 1)
      .then(response => response.json())
      .then(response => setstate(response)), 10000);
  setTimeout(clearInterval(fetchInterval), 100000);

  useEffect(() => {
    fetch('http://api.sbit500.pro/api/testjob?id_user=' + 1)
      .then(response => response.json())
      .then(response => setstate(response));
    fetchInterval();
  }, [])

  const orderSum = (array) => {
    let sum = 0;
    array.forEach(element => (sum += Number(element.frozen)));
    return sum;
  }

  const freeSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += Number(array[i].available);
    }
    return sum;
  }

  console.log(state);

  return (
    <div className={'App'}>
      <header>
        <img src={logo} alt={'logo'}/>
      </header>
      <MainTable
        totalSum = {state ? state.reduce((acc, cur) => {
          return (acc + Number(cur.balance));
          },0)
          :
          ''}
        orderSum = {state ? orderSum(state) : ''}
        freeSum = {state ? freeSum(state) : ''}
      />

      <div className='selectorTableContainer'>
        <Selector />
        <AddTable data={state}/>
      </div>

    </div>
  );
}

export default App;
