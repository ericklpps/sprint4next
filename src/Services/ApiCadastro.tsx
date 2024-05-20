// src/services/apiCadastro.ts
import axios from 'axios';
import { User } from '@/app/Types/types';

const api = axios.create({
  baseURL: 'http://localhost:4001/',
});

export const registerUser = async (
  name: string,
  lastName: string,
  email: string,
  password: string,
  birthday: Date,
  isColorBlind: boolean,
  typeColorBlind?: string
): Promise<User | null> => {
  const userData = {
    name,
    lastName,
    email,
    password,
    birthday,
    isColorBlind,
    typeColorBlind,
  };

  const response = await api.post<User>('/users', userData);
  const newUser = response.data;

  return newUser || null;
};
