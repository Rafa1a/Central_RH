import { useState } from 'react';
import { getverificaologin } from '../../public/controles/controlelogin';
import Login from '../../public/interfaces/interfacelogin';
import { useRouter } from 'next/router';
import VisibilityIcon from '@material-ui/core/Icon';
import VisibilityOffIcon from '@material-ui/core/SvgIcon';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); // estado para controlar se a senha deve ser exibida ou não
  const router = useRouter();

  async function handleLogin() {
    const user: Login = { codigo: -1, nome: "", email, senha };
    try {
      const response  = await getverificaologin(user);
      // fazer algo com a resposta, como redirecionar o usuário ou exibir mensagem de sucesso
      if(response === 200){
        localStorage.setItem('token', 'your_token_here');
        router.push('/')
      }else {
        alert('Usuario ou Senha Incorretos')
      }
    } catch (error) {
      console.error(error);
      // exibir mensagem de erro para o usuário
      
    }
  }

  return (
    <div>
      <label htmlFor="email">
        E-mail :
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="senha">
        Senha :
        <div style={{ position: 'relative' }}>
          <input type={mostrarSenha ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
            {mostrarSenha ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
      </label>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
