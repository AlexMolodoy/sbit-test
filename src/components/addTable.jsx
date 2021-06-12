import React, { useState, useEffect } from 'react';
import * as TYPES from 'prop-types';

import '../App.css';


const AddTable = ({ data }) => {

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <table className='addTable'>
      <tr className='headAddTable'>
        <td><span style={{'justify-content': 'flex-start'}}>Монета</span></td>
        <td><span>Курс к USDT</span></td>
        <td><span>Общий баланс</span></td>
        <td><span>В ордерах</span></td>
        <td><span>Свободный объем</span></td>
      </tr>
      {data ? data.map(element =>
        <tr key={element.id}>
          <td className='mainCell'>
            <span>
              <img scr={element.coin_img} alt={'logo_coin'}/>
              {element.coin_name}({element.coin})</span>
          </td>
          <td>
            <span>{element.price}</span>
          </td>
          <td>
            <span>{element.balance}</span>
          </td>
          <td>
            <span>{element.frozen}</span>
          </td>
          <td>
            <span>{element.available}</span>
          </td>
        </tr>
      ) : ''}
    </table>
  );
}

AddTable.propTypes = {
  data: TYPES.array,
};

AddTable.defaultProps = {
  data: [],
};

export default AddTable;