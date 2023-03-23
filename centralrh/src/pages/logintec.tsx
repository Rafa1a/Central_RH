import { useState } from 'react';
import { getverificaologintec } from '../../public/controles/controlelogintec';

import Login from '../../public/interfaces/interfacelogin';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux'
import {State} from '../../store/interfaces'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState
  (false); // estado para controlar se a senha deve ser exibida ou não
  const router = useRouter();

  const Darkmode = useSelector((state: State) => state.darkMode)

  async function handleLogin() {
    const user: Login = { id: 0, nome: "", perfil:"", email, senha };
    try {
      const response  = await getverificaologintec(user);
      // fazer algo com a resposta, como redirecionar o usuário ou exibir mensagem de sucesso
      if(response === 200){
        localStorage.setItem('token', 'centraltec');
        router.push('/centraltec')
      }else {
        alert('Usuario ou Senha Incorretos')
      }
    } catch (error) {
      console.error(error);
      // exibir mensagem de erro para o usuário
      
    }
  }
  const navbarBackgroundColorClass = Darkmode
  ? 'bg-dark'
  : 'bg-body-tertiary';

  const TextColorClass = Darkmode ? 'text-light' : 'text-dark';


  return (
    <div className='d-flex flex-row min-vh-100 align-items-center '>
      <div className={`d-flex flex-grow-1 flex-column justify-content-center align-items-center min-vh-100 ${navbarBackgroundColorClass}`}>
        <h1 className={`m-3 fs-1 ${TextColorClass}`}>
          Faça o Login
        </h1>
        <p className={`m-3 fs-4 ${TextColorClass}`}>Para entrar na nossa Plataforma.</p>
      </div>

      <div className='d-flex flex-row min-vh-100 align-items-center sombra '>
  <form className='m-3'>
    
    <div className="mb-3">
      <label htmlFor="email" className="form-label">E-mail:</label>
      <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="senha" className="form-label">Senha:</label>
      <div className="input-group">

        <input type={mostrarSenha ? 'text' : 'password'}
        className="form-control " id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => setMostrarSenha(!mostrarSenha)}>

          {mostrarSenha ? <p>Esconder</p>: <p>Mostrar</p>}

        </button>
      </div>
    </div>
    <button type="button" className="btn btn-primary" onClick={handleLogin}>Entrar</button>
  </form>
  </div>

</div>
  );
}
