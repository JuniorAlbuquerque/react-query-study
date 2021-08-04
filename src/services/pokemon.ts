import api from '../services/api'

export async function getPokemons() {
  const { data } = await api.get('/pokemon?limit=20&offset=200')
  return data
}

export async function getDitto() {
  const { data } = await api.get('/pokemon/ditto')
  return data
}