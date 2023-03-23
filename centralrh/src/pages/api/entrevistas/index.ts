import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import Entrevista from '../../../../public/interfaces/entrevista';


type Data = {
  entrevistas: Entrevista[];
};

const filePath = 'https://central-rh-dzv2-bnljwwfjz-rafa1a.vercel.app/usuarios/entrevistas.json';

const getEntrevistas = async (): Promise<Entrevista> => {
  const response = await fetch(filePath);
  const dados = await response.json();
  
  return dados;
};

const saveEntrevistas = (data: Data): void => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

export default async function entrevistasHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { method, body } = req;

  switch (method) {
    case 'GET':
  try {
    const entrevistas = await getEntrevistas(); // adicionado await aqui
    res.status(200).json(entrevistas);
  } catch (error : any) {
    res.status(500).send(error);
  }
  break;

    case 'POST':
      try {
        const { entrevista } = body;
        const entrevistas = getEntrevistas();
        const newEntrevista = { ...entrevista, id: Date.now() };
        
        res.status(200).json(entrevistas);
      } catch (error:any) {
        res.status(500).send(error);
      }
      break;
    
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
