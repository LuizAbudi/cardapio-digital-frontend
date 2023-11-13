import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



interface LoginProps {
    authenticate: () => void;
}


const Login: React.FC<LoginProps> = ({ authenticate }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const fixedUser = {
        username: 'atila',
        password: 'atila2737'
    }

    const fixedUser2 = {
        username: 'rafa',
        password:'rafa2737'
    }

    const navigate = useNavigate();
    const handleLogin = () => {
        if ((username === fixedUser.username && password === fixedUser.password) || (username === fixedUser2.username && password === fixedUser2.password)) {
            authenticate()
            localStorage.setItem(username, 'logado')
            navigate('/Admin')
        }        
        else{
            alert('Usuário e/ou senha inválidos')
        }
        
    }

    return (
     <div className='bg-wineColor min-h-screen flex items-center justify-center'>
        <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4 justify-center items-center flex'>Login</h2>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='username'
                className='block text-gray-600 text-sm font-medium mb-2 '
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
  )
}

export default Login
