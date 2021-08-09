import React, {
  useEffect,
  useMemo,
  // useState
} from "react";
// import usePokemon from "../../data/hooks/pokemon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  patientSchema,
  // pokemonSchema,
} from "../../services/validations/pokemonSchema";
import Input from "../Input";

// interface IFriend {
//   firstName: string;
//   id: number;
// }

// interface IData {
//   pacienteTitular: string;
//   nome: string;
//   cpf: string;
//   email: string;
//   friends: IFriend[];
// }

interface IPatient {
  nomeCompleto: string;
  cpf: string;
  email: string;
  dependente: {
    nomeCompleto: string;
    email: string;
    cpf: string;
  };
}

const HookForm: React.FC = () => {
  // const [indexes, setIndexes] = React.useState<IFriend[]>([]);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    // unregister,
    formState: {
      errors,
      touchedFields,
      // isSubmitted
    },
  } = useForm<IPatient>({
    resolver: yupResolver(patientSchema),
    mode: "onBlur",
  });

  // const addFriend = () => {
  //   setPoke("ditto");
  //   const oldData = [...indexes];
  //   oldData.push({
  //     id: Date.now(),
  //     firstName: `${Math.floor(Math.random() * 10)}`,
  //   });
  //   setIndexes(oldData);
  // };

  // const removeFriend = (index: number) => {
  //   const oldData = [...indexes];

  //   oldData.splice(index, 1);
  //   setIndexes(oldData);
  //   unregister(`friends.${index}.firstName`);
  // };

  const onSubmit = (data: IPatient) => {
    console.log(data);
    reset();
  };

  return (
    <div className="main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* {indexes.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "340px",
            }}
          >
            <label>Friend - {index}</label>
            <Input
              name={`friends.${index}.firstName`}
              register={register}
              error={errors?.friends?.[index]?.firstName?.message}
              isTouched={touchedFields?.friends?.[index]?.firstName}
              isSubmitted={isSubmitted}
            />
            <button type="button" onClick={() => removeFriend(index)}>
              Remove friend
            </button>
          </div>
        ))} */}
        {/* <button type="button" onClick={addFriend}>
          Add Friend
        </button> */}
        <div style={{ display: "flex", gap: 34, width: 600 }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <h4>Titular</h4>

            <label htmlFor="">Nome</label>
            <Input
              name="nomeCompleto"
              register={register}
              error={errors?.nomeCompleto?.message}
              isTouched={touchedFields?.nomeCompleto}
            />

            <label htmlFor="">Cpf</label>
            <Input
              name="cpf"
              register={register}
              error={errors?.cpf?.message}
              isTouched={touchedFields?.cpf}
            />

            <label htmlFor="">Email</label>
            <Input
              name="email"
              register={register}
              error={errors?.email?.message}
              isTouched={touchedFields?.email}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <h4>Dependente</h4>
            <label htmlFor="">Nome</label>
            <Input
              name="dependente.nomeCompleto"
              register={register}
              error={errors?.dependente?.nomeCompleto?.message}
              isTouched={touchedFields?.dependente?.nomeCompleto}
            />

            <label htmlFor="">Cpf</label>
            <Input
              name="dependente.cpf"
              register={register}
              error={errors?.dependente?.cpf?.message}
              isTouched={touchedFields?.dependente?.cpf}
            />

            <label htmlFor="">Email</label>
            <Input
              name="dependente.email"
              register={register}
              error={errors?.dependente?.email?.message}
              isTouched={touchedFields?.dependente?.email}
            />
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default HookForm;
