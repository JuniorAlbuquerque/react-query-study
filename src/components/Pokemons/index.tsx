import React, { useState } from "react";
import OnePokemon from "../OnePokemon";
import usePokemon from "../../data/hooks/pokemon";
import { capitalize } from "../../utils/capitalize";

const Pokemons: React.FC = () => {
  const [pokeName, setPokeName] = useState("");

  const { useAllPokemons } = usePokemon();
  const { pokemonList } = useAllPokemons();

  return (
    <div className="main">
      {pokeName ? (
        <>
          <OnePokemon name={pokeName} />
          <button className="btn-back" onClick={() => setPokeName("")}>
            Voltar
          </button>
        </>
      ) : (
        <div className="content">
          {pokemonList?.results.map((item: any) => (
            <div key={item.url}>
              <button onClick={() => setPokeName(item.name)}>
                {capitalize(item.name)}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemons;
