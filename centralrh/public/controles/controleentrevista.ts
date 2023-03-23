import Entrevista from '../interfaces/entrevista';
import fs from 'fs';
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