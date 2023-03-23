import  Login from '../interfaces/interfacelogin'
const baseURL = 'http://localhost:3000/api/loginrh'

export async function getverificaologinrh(user : Login): Promise<Number> {
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