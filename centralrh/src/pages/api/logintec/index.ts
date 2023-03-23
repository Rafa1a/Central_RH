import { NextApiRequest, NextApiResponse } from 'next';
import users from '../../../../public/usuarios/TECusers.json';



export default async function login (req:NextApiRequest, res: NextApiResponse){
    if (req.method === 'POST'){
        try{
            const {email, senha} = req.body
    
     // Verifica se o usuário existe no arquivo users.json
    
     const userL = users.users.find(user=> user.email === email)
     const userS = users.users.find(user=> user.senha === senha)
    if (userL && userS){
        console.log(userL, userS)
        //const userss = users.users 
        res.status(200).json(200)
        
    }else {
        console.log(userL, userS)
        //const userss = users.users 
        res.status(401).json(401)
    }
        }catch (error){
            
            res.status(500).json({ message: 'Erro Verifica o login: ' + error })
    
        }
    }

}

