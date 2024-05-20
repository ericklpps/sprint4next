"use client"

// src/components/Login.tsx
import React, { useState } from 'react';
import { loginUser } from '@/Services/ApiLogin'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const user = await loginUser(email, password); // Utiliza a função loginUser com os dados do formulário
    if (user) {
      console.log('Usuário logado:', user);
      // Aqui você pode redirecionar o usuário para outra página após o login bem-sucedido
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginPage;
