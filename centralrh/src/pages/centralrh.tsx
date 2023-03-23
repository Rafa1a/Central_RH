import PrivateRoute, { LoginType } from './PrivateRoute';
import { useState } from "react";
import {useSelector,useDispatch } from 'react-redux'
import {State} from '../../store/interfaces'
import Link from 'next/link';
import {darkmode} from '../../store/actions'
import data from '../../public/usuarios/entrevistas.json'

import moment from "moment";

export default function LoginPageRH() {
  const dispatch = useDispatch()

  const Darkmode = useSelector((state: State) => state.darkMode)

  const handleDarkModeToggle = () => {
    dispatch(darkmode());
    };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index:number) => {
      setActiveIndex(index);
    };
  
  const navbarBackgroundColorClass = Darkmode
  ? 'bg-dark'
  : 'bg-body-tertiary';
  const navbarTextColorClass = Darkmode ? 'text-light' : 'text-dark';
  
  const navbartoggler = Darkmode ? 'navbar-dark' : 'navbar-light'
  
  const BackgroundColorClass = Darkmode
  ? 'bg-light'
  : 'bg-dark';
  const TextColorClass = Darkmode ? 'text-dark' : 'text-light';

  return (
    
      <PrivateRoute loginType={LoginType.RH}>
        <div className={`d-flex flex-column min-vh-100 ${navbarBackgroundColorClass}`}>
           <header className='sombra'>
        <nav className={`navbar navbar-expand-sm  ${navbarBackgroundColorClass} ${navbartoggler}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${navbarTextColorClass}`}  href="/centralrh">Controll</Link>
          <button className="navbar-toggler navbar-toggler-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link className={`nav-link ${navbarTextColorClass}`} href="/">Entrevistas</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${navbarTextColorClass}`} href="/">RH</Link>
              </li>
            </ul>
        
          </div>
          <button className= {`btn btn-sm ${Darkmode ? 'btn-light' : 'btn-dark'}`} onClick={handleDarkModeToggle}>{Darkmode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
        </nav>
            </header>

            <main className={`d-flex flex-grow-1 flex-column justify-content-center align-items-center min-vh-100 ${navbarBackgroundColorClass}`}>
              <div className='row flex-grow-1  justify-content-center align-items-center w-100'>
              <div className='col-6 d-flex justify-content-center'>
                <button type="button" className="btn btn-primary mx-2 w-25">Botão</button>
              </div>
                <div className='col-6 list-group ' style={{ maxHeight: "60vh", overflowY: "scroll"}}>

                {data.map((item, index )=> (
                  <button key={item.id} className={`list-group-item list-group-item-action ${
                    index === activeIndex ? "active" : ""
                  }`} type="button" onClick={() => handleClick(index)}>
                  
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{item.nomeCandidato}</h5>
                      <small>{moment(item.dataHora).format("DD/MM/YYYY HH:mm")}</small>
                    </div>
                    <p className="mb-1">{item.descricao}</p>
                    <small>{item.vaga}</small>
                  </button>
                ))}
                 
                  
                </div>
              </div>
            </main>



          <footer className=" bg-dark text-light py-2">
          <div className="container d-flex justify-content-center ">
            <p className="m-0 ">@Criado Por Rafa</p>
          </div>
        </footer>
        </div>
      </PrivateRoute>
    
  );
}
