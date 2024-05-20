// src/services/ApiLogin.tsx
import axios from 'axios';
import { User } from '@/app/Types/types'; // Certifique-se de importar o tipo User corretamente

const api = axios.create({
  baseURL: 'http://localhost:3001/users',
});

export const loginUser = async (email: string, password: string): Promise<User | null> => {
  try {
    // Fazemos uma requisição POST para a rota '/login', passando os parâmetros email e password
    const response = await api.post<User>('/login', {
      email,
      password
    });
    
    // Retorna o usuário encontrado ou null se não encontrado
    return response.data;
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    return null;
  }
};
