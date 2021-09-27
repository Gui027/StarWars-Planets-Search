import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Planets from './Planets';
import InputSearch from './InputSearch';

function Table() {
  const { planets, titles, filters, filterByNumericValues } = useContext(MyContext);
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
          {planets.filter((plan) => { // Recebi ajuda na lógica, Leonardo da turma A.
            const validation = filterByNumericValues.every((filter) => { // every testa se todos os elementos do array passam por um teste implementado por uma função fornecida. Ele retorna true ou false baseado na condição especificada.
              const { column, comparison, value } = filter;
              if (comparison === 'maior que') {
                return Number(plan[column]) > Number(value);
              }
              if (comparison === 'menor que') {
                return Number(plan[column]) < Number(value);
              }
              if (comparison === 'igual a') {
                return Number(plan[column]) === Number(value);
              }
              return false;
            });
            return validation;
          })
            .filter((plan) => plan.name.toLowerCase().includes(filters))
            .map((planet, i) => <Planets key={ i } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
