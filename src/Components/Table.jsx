import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Planets from './Planets';

function Table() {
  const { planets, titles } = useContext(MyContext);
  return (
    <div>
      <table border={ 1 }>
        <thead>
          <tr>
            {titles.map((title, id) => <th key={ id }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, i) => <Planets key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
