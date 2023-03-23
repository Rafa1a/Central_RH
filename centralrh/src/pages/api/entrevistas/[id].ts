import { NextApiRequest, NextApiResponse } from 'next';
import Entrevista from '../../../../public/interfaces/entrevista';
import fs from 'fs';
import data from '../../../../public/usuarios/entrevistas.json'


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
        let entrevistas = await getEntrevistas();
        const updatedEntrevistas = entrevistas.filter((entrevista : Entrevista) => entrevista.id !== id);
        entrevistas = updatedEntrevistas;
        saveEntrevistas(entrevistas);
        res.status(200).json(entrevistas);
      } catch (error) {
        res.status(500).send(error);
      }

}

}