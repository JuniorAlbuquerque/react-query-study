import { useQuery } from "react-query";
import { getPokemonByName, getPokemons } from "../../../services/pokemon";
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const noMutationConfig = {
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
  retry: false,
  staleTime: twentyFourHoursInMs,
};

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

function useThreePokemons() {
  const { data: pikachu } = useQuery(
    ["pikachu"],
    () => getPokemonByName("pikachu"),
    noMutationConfig
  );

  const { data: wobbuffet } = useQuery(
    ["wobbuffet"],
    () => getPokemonByName("wobbuffet"),
    noMutationConfig
  );

  return {
    pikachu,
    wobbuffet,
  };
}

function useAllPokemons() {
  const { data: pokemonList, isLoading: loadingGetPokemons } = useQuery(
    ["pokeListzin"],
    getPokemons,
    noMutationConfig
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
    useThreePokemons,
  };
}
