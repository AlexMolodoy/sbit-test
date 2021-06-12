import React, { useState, useEffect } from 'react';


const Selector = () => {

  return (
    <div className='selctorContainer'>
      <select className={'Selector'}>
      <option>Пользователь 1</option>
      <option>Пользователь 2</option>
    </select>
    </div>
  );
}

export default Selector;