// src/services/apiCadastro.ts
import axios from 'axios';
import { User } from '@/app/Types/types';

const api = axios.create({
  baseURL: 'http://localhost:4001/',
});

export const registerUser = async (
  nome: string,
  sobrenome: string,
  email: string,
  senha: string,
  telefone: string,
  endereco: string,
  daltonismo: boolean,
  tipoDaltonismo: string
): Promise<User | null> => {
  // Preparando os dados do usuário para envio
  const userData = {
    nome,
    sobrenome,
    email,
    senha,
    telefone,
    endereco,
    daltonismo,
    tipoDaltonismo,
  };

  // Fazendo uma requisição POST para a rota '/users', enviando os dados do usuário
  const response = await api.post<User>('/users', userData);

  // Verificando se o usuário foi criado com sucesso
  const newUser = response.data;

  // Aqui você pode adicionar lógica adicional para verificar se o usuário foi criado com sucesso,
  // por exemplo, verificando se o ID do usuário é válido ou se algum token de autenticação foi retornado.

  // Para fins de demonstração, retornamos o novo usuário ou null se algo der errado
  return newUser || null;
};
