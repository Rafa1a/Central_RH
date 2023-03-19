import { NextApiRequest, NextApiResponse } from 'next';
import users from '../../../../public/usuarios/RHusers.json';

type User = {
    email : string
    senha : string
}
type userlist = {
    userss : User[]
}

export default function login (req:NextApiRequest, res: NextApiResponse){
    const {email, senha} = req.body
    
     // Verifica se o usuário existe no arquivo users.json
     const userlist  = users

     const user = userlist.users.find(user=> user.email === email)
     console.log (users)
    
}

