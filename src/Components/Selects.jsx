import React, { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';

function Selects() {
  const { handleClick } = useContext(MyContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');
  return (
    <div>
      <label htmlFor="column-filter">
        <select
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          value={ comparison }
          onChange={ ({ target: { value } }) => setComparison(value) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        value={ valor }
        onChange={ ({ target: { value } }) => setValor(value) }
        data-testid="value-filter"
        type="number"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick({ column, comparison, value: valor }) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Selects;
