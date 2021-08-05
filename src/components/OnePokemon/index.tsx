import React from "react";
import usePokemon from "../../data/hooks/pokemon";
interface IPokemon {
  name: string;
}

const OnePokemon: React.FC<IPokemon> = ({ name }) => {
  const { usePokemonByName } = usePokemon();
  const { pokemonData } = usePokemonByName(name);

  return (
    <div className="pokemon">
      <h3>{pokemonData?.name.toUpperCase()}</h3>
      <div>
        <div className="row">
          <span className="label">Altura: </span>

          <span className="value">{pokemonData?.height}</span>
        </div>
        <div className="row">
          <span className="label">Peso: </span>

          <span className="value">{pokemonData?.weight}</span>
        </div>

        <div className="row">
          <span className="label">Habilidades: </span>
        </div>

        <div className="abilities">
          {pokemonData?.abilities?.map((item: any) => (
            <span>{item?.ability?.name}</span>
          ))}
        </div>
      </div>
      <img
        src={pokemonData?.sprites?.other?.dream_world?.front_default}
        alt=""
      />
    </div>
  );
};

export default OnePokemon;
