import api from "../services/api";

interface IAbilities {
  ability: {
    name: string;
    url: string;
  };
}

interface IPokemon {
  height: number;
  id: number;
  name: string;
  weight: number;
  abilities: IAbilities[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export async function getPokemons() {
  const { data } = await api.get("/pokemon?limit=20&offset=200");
  return data;
}

export async function getPokemonByName(name: string): Promise<IPokemon> {
  const { data } = await api.get(`/pokemon/${name}`);
  return data;
}
