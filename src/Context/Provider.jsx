import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import usePlanets from '../Hooks/fetchHook';

function Provider({ children }) {
  const { planets, setPlanets, titles, filters, setFilters, handleChange } = usePlanets();

  const contextValue = {
    planets,
    setPlanets,
    titles,
    filters,
    setFilters,
    handleChange,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
