"use client"
import React, { useState } from 'react';
import { registerUser } from "@/Services/ApiCadastro"

interface User {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  telefone: string;
  endereco: string;
  daltonismo: boolean;
  tipoDaltonismo?: string;
}

const Cadastro: React.FC = () => {
  const [values, setValues] = useState<User>({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    telefone: '',
    endereco: '',
    daltonismo: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({
     ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await registerUser(values.nome, values.sobrenome, values.email, values.senha, values.telefone, values.endereco, values.daltonismo, values.tipoDaltonismo);
      if (user) {
        alert('Cadastro realizado com sucesso!');
        // Redirecionar para outra página após o cadastro
      }
    } catch (error) {
      alert('Erro ao cadastrar. Por favor, tente novamente.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" name="nome" value={values.nome} onChange={handleChange} required />
      </label>
      <label>
        Sobrenome:
        <input type="text" name="sobrenome" value={values.sobrenome} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={values.email} onChange={handleChange} required />
      </label>
      <label>
        Senha:
        <input type="password" name="senha" value={values.senha} onChange={handleChange} required />
      </label>
      <label>
        Telefone:
        <input type="tel" name="telefone" value={values.telefone} onChange={handleChange} required />
      </label>
      <label>
        Endereço:
        <input type="text" name="endereco" value={values.endereco} onChange={handleChange} required />
      </label>
      <label>
        Possui daltonismo?
        <select name="daltonismo" value={values.daltonismo} onChange={handleChange}>
          <option value="">Selecione...</option>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </label>
      {values.daltonismo && (
        <>
          <label>
            Tipo de daltonismo:
            <select name="tipoDaltonismo" value={values.tipoDaltonismo} onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value="monocromático">Monocromático</option>
              <option value="dicromático">Dicromático</option>
              <option value="tricromático">Tricromático</option>
            </select>
          </label>
        </>
      )}
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;