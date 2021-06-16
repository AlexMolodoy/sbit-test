import React from 'react';
import { observer } from "mobx-react-lite"
import store from '../store/mainStore';


const Selector = observer(() => {

  return (
    <div className='selctorContainer'>
      <select className={'Selector'} onChange={(e)=> {store.userChange(e.target.value);
      console.log(store.currentUser)}}>
        <option value='1'>Пользователь 1</option>
        <option value='2'>Пользователь 2</option>
    </select>
    </div>
  );
})

export default Selector;