// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './api';

interface LoginProps {
  authenticate: () => void;
}

const Login: React.FC<LoginProps> = ({ authenticate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL, {
        username,
        password,
      });

      const token = response.data.access_token;

      if (token){
        localStorage.setItem('token', token);
        authenticate();
        navigate('/Admin');
      }else { 
        setError('Erro ao obter o token. Tente novamente.')
      }

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setError('Credenciais inválidas. Tente novamente.');
        } else {
          setError('Erro de conexão. Verifique sua conexão e tente novamente.');
        }
      } else {
        setError('Erro desconhecido. Tente novamente mais tarde.');
      }
    } 
  };

  return (
    <div className='bg-wineColor min-h-screen flex items-center justify-center'>
      <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 justify-center items-center flex'>
          Login
        </h2>
        {error && (
          <div className="text-red-600 mb-4">
            {error}
          </div>
        )}
        <form>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Usuário:
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Senha:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-200'
            />
          </div>
          <button
            type='button'
            onClick={handleLogin}
            className='w-full bg-wineColor text-white py-2 rounded-md'
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
