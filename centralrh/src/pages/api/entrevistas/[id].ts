import { NextApiRequest, NextApiResponse } from 'next';
import Entrevista from '../../../../public/interfaces/entrevista';
import fs from 'fs';
import data from '../../../../public/usuarios/entrevistas.json'


  const filePath = '../../../../public/usuarios/entrevistas.json';
  
  const getEntrevistas = () => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  };
  
  const saveEntrevistas = (data: Entrevista): void => {
    fs.writeFileSync(filePath, JSON.stringify(data));
  };

export default (req: NextApiRequest, res: NextApiResponse) => {
    
  if (req.method === 'DELETE') { 
    try {
        const  id  = Number(req.query.id);
        const entrevistas = getEntrevistas();
        const updatedEntrevistas = entrevistas.entrevistas.filter((entrevista : Entrevista) => entrevista.id !== id);
        entrevistas.entrevistas = updatedEntrevistas;
        saveEntrevistas(entrevistas);
        res.status(200).json(entrevistas);
      } catch (error) {
        res.status(500).send(error);
      }

}

}