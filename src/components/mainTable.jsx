import React from 'react';
import { observer } from "mobx-react-lite"
import '../App.css';

import store from '../store/mainStore';


const MainTable = observer(() => (
    <table className={'MainTable'}>
      <tr>
        <td><span>Общий баланс (сумма):</span></td>
        <td><span>{store.currentState ? store.totalSum() : ''} USDT</span></td>
      </tr>
      <tr>
        <td><span>В ордерах (сумма):</span></td>
        <td><span>{store.currentState ? store.orderSum() : ''} USDT</span></td>
      </tr>
      <tr>
        <td><span>Свободный объем (сумма):</span></td>
        <td><span>{store.currentState ? store.freeSum() : ''} USDT</span></td>
      </tr>
    </table>
  )
)

export default MainTable;