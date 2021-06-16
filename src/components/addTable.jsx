import React, { useState, useEffect } from 'react';
import * as TYPES from 'prop-types';
import { observer } from "mobx-react-lite"
import store from '../store/mainStore';

import '../App.css';


const AddTable = observer(() => {

  const [state, setstate] = useState({
    price: 0,
    balance: 0,
    frozen: 0,
    available: 0,
  });
  const [stateColor, setStateColor] = useState('white');


  useEffect(() => {
    if (store.currentState) {
    if (
      state.price     < store.currentState.price    ||
      state.balance   < store.currentState.balance  ||
      state.frozen    < store.currentState.frozen   ||
      state.available < store.currentState.available
    ) {
      setStateColor('green');
      setTimeout(() => setStateColor('white'), 1000);
    } else if (
      state.price     > store.currentState.price    ||
      state.balance   > store.currentState.balance  ||
      state.frozen    > store.currentState.frozen   ||
      state.available > store.currentState.available
    ) {
      setStateColor('red');
      setTimeout(() => setStateColor('white'), 1000);
    };
    setstate({
      price: store.currentState.price,
      balance: store.currentState.balance,
      frozen: store.currentState.frozen,
      available: store.currentState.available,
    });
  }}, [store.currentState]);

  return (
    <table className='addTable'>
      <tr className='headAddTable'>
        <td><span style={{'justifyContent': 'flex-start'}}>Монета</span></td>
        <td><span>Курс к USDT</span></td>
        <td><span>Общий баланс</span></td>
        <td><span>В ордерах</span></td>
        <td><span>Свободный объем</span></td>
      </tr>
      {store.currentState ? store.currentState.map(element =>
        <tr key={element.id}>
          <td className='mainCell'>
          <span className='coinText'>
              <img src={element.coin_img} className='coinImg' alt={'logo_coin'}/>
              {element.coin_name} ({element.coin})</span>
          </td>
          <td>
            <span style={{'color': stateColor}}>{element.price}</span>
          </td>
          <td>
            <span style={{'color': stateColor}}>{element.balance}</span>
          </td>
          <td>
            <span style={{'color': stateColor}}>{element.frozen}</span>
          </td>
          <td>
            <span style={{'color': stateColor}}>{element.available}</span>
          </td>
        </tr>
      ) : ''}
    </table>
  );
})

AddTable.propTypes = {
  data: TYPES.array,
};

AddTable.defaultProps = {
  data: [],
};

export default AddTable;