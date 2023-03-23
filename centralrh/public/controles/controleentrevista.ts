import Entrevista from '../interfaces/entrevista';
import data from '../usuarios/entrevistas.json'
const filePath = '../usuarios/entrevistas.json';

const baseURL = 'https://central-rh-dzv2-rafa1a.vercel.app/api/entrevistas'

export async function getEntrevistas () {
  const response = await fetch(filePath);
  const dados = await response.json();
  
  return dados;
};
export async function setadicionarentrevista(user : Entrevista): Promise<Entrevista> {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch');
  }
  
} 
export async function setexcluir(id: number) {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Erro ao excluir entrevista');
    
  }
  const data = await response.json(); 
  return data.ok;
}