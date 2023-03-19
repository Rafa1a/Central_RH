import { useState } from 'react';
type loginprops = {
    onlogin:  (credencial : {email : string , senha : string} ) => void
}
export default function login ({onlogin}: loginprops){
    const [email, setmail] = useState('')
    const [senha, setsenha] = useState('')
    
    const lelogin = () => {
        onlogin ({email, senha})
    }

    return (

        <div>
            <label htmlFor="email">
                E-mail : 
                <input type="email" value={email} onChange = {e => setmail(e.target.value)} />

            </label>
            <label htmlFor="senha">
                Senha :
                <input type="senha" value={senha} onChange = {e => setsenha(e.target.value)}/>
            </label>
            <button onClick= {lelogin} >Entrar</button>
        </div>
    )
}