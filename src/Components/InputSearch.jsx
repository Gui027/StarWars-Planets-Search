import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import Selects from './Selects';

function InputSearch() {
  const { handleChange } = useContext(MyContext);
  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="pesquisar"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </div>
      <Selects />
    </section>
  );
}

export default InputSearch;
