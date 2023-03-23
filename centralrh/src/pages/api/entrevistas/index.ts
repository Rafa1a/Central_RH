import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import Entrevista from '../../../../public/interfaces/entrevista';


type Data = {
  entrevistas: Entrevista[];
};

const filePath = '../../../../public/usuarios/entrevistas.json';

const getEntrevistas = (): Data => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as Data;
};

const saveEntrevistas = (data: Data): void => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

export default async function entrevistasHandler(req: NextApiRequest, res: NextApiResponse<Data | string>): Promise<void> {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const entrevistas = getEntrevistas();
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
        entrevistas.entrevistas.push(newEntrevista);
        saveEntrevistas(entrevistas);
        res.status(200).json(entrevistas);
      } catch (error) {
        res.status(500).send("");
      }
      break;
    case 'DELETE':
      try {
        const { id } = body;
        const entrevistas = getEntrevistas();
        const updatedEntrevistas = entrevistas.entrevistas.filter((entrevista) => entrevista.id !== id);
        entrevistas.entrevistas = updatedEntrevistas;
        saveEntrevistas(entrevistas);
        res.status(200).json(entrevistas);
      } catch (error) {
        res.status(500).send("");
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
