import React from 'react';
import { useQuery } from 'react-query'
import { getPokemons } from '../../services/pokemon'

interface IPoke {
  onClose(): void
}
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const Pokemons: React.FC<IPoke> = ( { onClose }) => {
  const { data, isLoading } = useQuery('pokeList', getPokemons, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: twentyFourHoursInMs
  })

  return (
    <div>
      {
        isLoading && 
        <div>Loading...</div>
      }
      {
        data?.results.map((item: any) => (
          <div key={item.url}>
            {item.name.toLowerCase()}
          </div>
        ))
      }

      <button onClick={onClose}>Close List</button>
    </div>
  );
}

export default Pokemons;