import { NextApiRequest, NextApiResponse } from 'next';
import Entrevista from '../../../../public/interfaces/entrevista';
import fs from 'fs';



const filePath = 'https://central-rh-dzv2-rafa1a.vercel.app/usuarios/entrevistas.json';

const getEntrevistas = async (): Promise<Entrevista[]> => {
  const response = await fetch(filePath);
  const dados = await response.json();
  
  return dados;
};
  
  const saveEntrevistas = (data: Entrevista[]): void => {
    fs.writeFileSync(filePath, JSON.stringify(data));
  };

export default async(req: NextApiRequest, res: NextApiResponse) => {
    
  if (req.method === 'DELETE') { 
    try {
        const  id  = Number(req.query.id);

        const entrevistas = fs.readFileSync('../../../../public/usuarios/entrevistas.json', 'utf-8');
        const dados = JSON.parse(entrevistas);


        const updatedEntrevistas = dados.filter
        ((entrevista : Entrevista) => entrevista.id !== id);
        const json = JSON.stringify(updatedEntrevistas);
        
        fs.writeFileSync('../../../../public/usuarios/entrevistas.json', json);
        

        res.status(200).json(json);
      } catch (error) {
        res.status(500).send(error);
      }

}

}