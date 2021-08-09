import React, { useState } from "react";
import OnePokemon from "../OnePokemon";
import usePokemon from "../../data/hooks/pokemon";
import { capitalize } from "../../utils/capitalize";
import HookForm from "../HookForm";

const Pokemons: React.FC = () => {
  const [pokeName, setPokeName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const { useAllPokemons } = usePokemon();
  const { pokemonList } = useAllPokemons();

  return (
    <div className="main">
      {!showForm &&
        (pokeName ? (
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
        ))}

      {showForm && <HookForm />}

      <button style={{ margin: 14 }} onClick={() => setShowForm(!showForm)}>
        {!showForm ? "Mostrar" : "Ocultar"} form
      </button>
    </div>
  );
};

export default Pokemons;
