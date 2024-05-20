// src/components/Cadastro.tsx
"use client"
import React, { useState } from 'react';
import { registerUser } from '@/Services/ApiCadastro'; // Supondo que você tenha esta função

interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  isColorBlind: boolean;
  typeColorBlind?: string;
}

const Cadastro: React.FC = () => {
  const [values, setValues] = useState<User>({
    name: '',
    lastName: '',
    email: '',
    password: '',
    birthday: new Date(),
    isColorBlind: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLInputElement>) => {
    setValues({
     ...values,
      [e.target.name]: e.target.type === "checkbox"? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await registerUser(
        values.name,
        values.lastName,
        values.email,
        values.password,
        values.birthday,
        values.isColorBlind,
        values.typeColorBlind
      );
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
      <div>
        <label htmlFor="name">Nome:</label>
        <input id="name" type="text" name="name" value={values.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="lastName">Sobrenome:</label>
        <input id="lastName" type="text" name="lastName" value={values.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" value={values.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input id="password" type="password" name="password" value={values.password} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="birthday">Data de Aniversário:</label>
        <input id="birthday" type="date" name="birthday" value={values.birthday.toISOString().split('T')[0]} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="isColorBlind">
          Possui daltonismo?
          <input id="isColorBlind" type="checkbox" name="isColorBlind" checked={values.isColorBlind} onChange={handleChange} />
        </label>
        {values.isColorBlind && (
          <div>
            <label htmlFor="typeColorBlind">Tipo de daltonismo:</label>
            <select id="typeColorBlind" name="typeColorBlind" value={values.typeColorBlind} onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value="monocromatico">Monocromático</option>
              <option value="dicromatico">Dicromático</option>
              <option value="tricromatico">Tricromático</option>
            </select>
          </div>
        )}
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
