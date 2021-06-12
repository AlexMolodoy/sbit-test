import React, { useState, useEffect } from 'react';
import '../App.css';


const MainTable = ({ totalSum, orderSum, freeSum }) => {

  return (
    <table className={'MainTable'}>
      <tr>
        <td><span>Общий баланс (сумма):</span></td>
        <td><span>{totalSum} USDT</span></td>
      </tr>
      <tr>
        <td><span>В ордерах (сумма):</span></td>
        <td><span>{orderSum} USDT</span></td>
      </tr>
      <tr>
        <td><span>Свободный объем (сумма):</span></td>
        <td><span>{freeSum} USDT</span></td>
      </tr>
    </table>
  );
}

export default MainTable;