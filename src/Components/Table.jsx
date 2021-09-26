import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Planets from './Planets';
import InputSearch from './InputSearch';

function Table() {
  const { planets, titles, filters } = useContext(MyContext);
  return (
    <div>
      <InputSearch />
      <table border={ 1 }>
        <thead>
          <tr>
            {titles.map((title, id) => <th key={ id }>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.filter((plan) => plan.name.toLowerCase().includes(filters))
            .map((planet, i) => <Planets key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
