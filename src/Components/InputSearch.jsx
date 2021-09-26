import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function InputSearch() {
  const { handleChange } = useContext(MyContext);
  return (
    <div>
      <input
        type="text"
        placeholder="pesquisar"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default InputSearch;
