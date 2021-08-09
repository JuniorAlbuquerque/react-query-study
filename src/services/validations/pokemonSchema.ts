import * as yup from "yup";
import { isValidCPF } from "./validates/validateCpf";

const typeErrors = {
  required: "Campo obrigatório",
  cpf: "CPF inválido",
  email: "E-mail inválido",
};

export const pokemonSchema = yup.object().shape({
  pacienteTitular: yup.string().required(),
  nome: yup.string().required(),
  cpf: yup
    .mixed()
    .required(typeErrors.required)
    .test("cpf", typeErrors.cpf, (value) => isValidCPF(value))
    .nullable(),
  email: yup.string().email().required(),
  friends: yup.array().of(
    yup.object().shape({
      firstName: yup.string().required(typeErrors.required),
    })
  ),
});

export const patientSchema = yup.object().shape({
  nomeCompleto: yup.string().required(typeErrors.required),
  cpf: yup
    .string()
    .required(typeErrors.required)
    .test("cpf", typeErrors.cpf, (value) => isValidCPF(value || ""))
    .nullable(),
  email: yup.string().email(typeErrors.email).required(typeErrors.required),
  dependente: yup.object().shape({
    nomeCompleto: yup.string().required(typeErrors.required),
    email: yup.string().email(typeErrors.email).required(typeErrors.required),
    cpf: yup
      .string()
      .required(typeErrors.required)
      .test("cpf", typeErrors.cpf, (value) => isValidCPF(value || ""))
      .nullable(),
  }),
});
