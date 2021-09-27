import { useEffect, useState } from 'react';

export default function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [titles, setTitles] = useState([]);
  // const [state, setState] = useState([]);
  const [filters, setFilters] = useState(''); // filtro do nome
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const handleClick = (value) => { // valores vindo do formulário
    setFilterByNumericValues([...filterByNumericValues, value]);
  };

  const handleChange = ({ target: { value } }) => {
    setFilters(value);
  };

  useEffect(() => {
    async function fetchResult() {
      const fetchData = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await fetchData.json();
      const filteredData = results.map((result) => {
        const resultFilter = result;
        delete resultFilter.residents;
        return resultFilter;
      });
      setPlanets(filteredData);
      // setState(filteredData); // criei estado para fazer o filter no input
      const keys = Object.keys(filteredData[0]);
      setTitles(keys);
    }
    fetchResult();
  }, []);

  return {
    planets,
    setPlanets,
    titles,
    filters,
    setFilters,
    handleChange,
    // state,
    handleClick,
    filterByNumericValues,
    setFilterByNumericValues,
  };
}
