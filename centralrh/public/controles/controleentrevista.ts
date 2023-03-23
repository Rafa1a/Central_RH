import Entrevista from '../interfaces/entrevista';
import data from '../usuarios/entrevistas.json'
const filePath = '../usuarios/entrevistas.json';

const baseURL = 'http://localhost:3000/api/entrevistas'

export async function getEntrevistas () {
  const response = await fetch(filePath);
  const dados = await response.json();
  
  return dados;
};
export async function setadicionarentrevista(user : Entrevista): Promise<Entrevista> {
    const  response =await fetch (baseURL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      } )
    const data = await response.json() 
    
    return data
} 
export async function setexcluir(id: number): Promise<Number> {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    // envie o id como parte do corpo da requisição
    body: JSON.stringify({ id: id })
  });
  if (!response.ok) {
    throw new Error('Erro ao excluir entrevista');
    
  }
  const data = await response.json(); 
  return data;
}