import { useQuery } from "react-query";
import { getPokemonByName, getPokemons } from "../../../services/pokemon";
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

function usePokemonByName(name: string) {
  const { data: pokemonData, isLoading: loadingOnePokemon } = useQuery(
    ["onePoke", name],
    () => getPokemonByName(name)
  );

  return {
    pokemonData,
    loadingOnePokemon,
  };
}

function useAllPokemons() {
  const { data: pokemonList, isLoading: loadingGetPokemons } = useQuery(
    ["pokeListzin"],
    getPokemons,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    }
  );

  return {
    pokemonList,
    loadingGetPokemons,
  };
}

export default function usePokemon() {
  return {
    usePokemonByName,
    useAllPokemons,
  };
}
