import axios from 'axios';
import { User } from '@/app/Types/types';
const api = axios.create({
  baseURL: 'http://localhost:4001/',
});
export const loginUser =
     async (username: string, password: string): Promise<User | null> =>
  {      // Fazemos uma requisição GET para a rota '/users', passando os parâmetros username e password
          const response = await api.get<User[]>('/users', {
            params: { username, password }
          });
          //LOGIN POR TOKEN PESQUISEM....

          // Procuramos no array de usuários retornado pela API
          //  por um usuário que tenha o username e password correspondentes
          const user = response.data.find(u => u.username === username && u.password === password);
// Retornamos o usuário encontrado ou null se nenhum usuário for encontrado
          return user || null;
  }