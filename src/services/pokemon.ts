import api from "../services/api";

export async function getPokemons() {
  const { data } = await api.get("/pokemon?limit=20&offset=200");
  return data;
}

export async function getPokemonByName(name: string) {
  const { data } = await api.get(`/pokemon/${name}`);
  return data;
}
