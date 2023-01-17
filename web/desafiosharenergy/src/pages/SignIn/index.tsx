import { useState, useContext } from 'react';

import './signIn.css';
import logo from '../../assets/logo.png';
import {GoogleLogo, Envelope, LockKey, Eye} from 'phosphor-react';
import { FormEvent } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingAuth] =useState(false)
  
  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
   if(email !== '' && password !== ''){
   
      setEmail('');
      setPassword('');
   }
    
  }
    return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <div className='container-center' >
        <div className='logo-sistema'>
        <h2 className='text-md text-gray-400'>Desafio Sharenergy</h2>
         <h1>Faça seu Login no sistema</h1>
         
         </div>
         
        <div className='login'>
          <div className='logo-area'>           
          </div>

          <form onSubmit={handleSubmit}>
          <Envelope className='envelope' size={20} />
          <LockKey className='cadeado' size={20} />
          
          <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Senha*' value={password} onChange={(e) => setPassword(e.target.value)}  />
          <button className='bg-red-900' type='submit'>{loadingAuth ? 'Carregando... ': 'Logar'}</button>
          </form>

          <strong className='text-sm text-gray-500 text-center'> Não tem uma conta? Registre-se</strong>
        
        </div>
      </div>
    </div>
    )
  }
  
  export default SignIn