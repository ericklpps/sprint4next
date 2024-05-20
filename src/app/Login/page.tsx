"use client"

// src/components/Login.tsx
import React, { useState } from 'react';
import { loginUser } from '@/Services/ApiLogin'
import FeedbackForm from '@/app/Feedback/page'; // Importe o componente FeedbackForm

interface LoginProps {
  onSuccess?: (user: any) => void; // Adiciona a propriedade onSuccess
}

const LoginPage: React.FC<LoginProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await loginUser(email, password);
    if (user) {
      console.log('Usuário logado:', user);
      if (onSuccess) {
        onSuccess(user); // Chama a função onSuccess com o usuário
      }
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <>
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
      {/* Mostra o formulário de feedback somente se a função onSuccess foi definida */}
      {onSuccess && <FeedbackForm />}
    </>
  );
};

export default LoginPage;
