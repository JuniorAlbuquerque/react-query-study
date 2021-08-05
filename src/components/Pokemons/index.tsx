import React, { useState } from "react";
import usePokemon from "../../data/hooks/pokemon";
import OnePokemon from "../OnePokemon";

const Pokemons: React.FC = () => {
  const [pokeName, setPokeName] = useState("");

  const { useAllPokemons } = usePokemon();
  const { pokemonList } = useAllPokemons();

  return (
    <div className="main">
      {!pokeName && (
        <div className="content">
          {pokemonList?.results.map((item: any) => (
            <div key={item.url}>
              <button onClick={() => setPokeName(item.name)}>
                {item.name.toLowerCase()}
              </button>
            </div>
          ))}
        </div>
      )}

      {pokeName && <OnePokemon name={pokeName} />}
      {pokeName && (
        <button className="btn-back" onClick={() => setPokeName("")}>
          Voltar
        </button>
      )}
    </div>
  );
};

export default Pokemons;
