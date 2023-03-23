import PrivateRoute, { LoginType } from './PrivateRoute';
import { useState } from "react";
import {useSelector,useDispatch } from 'react-redux'
import {State} from '../../store/interfaces'
import Link from 'next/link';
import {darkmode} from '../../store/actions'
import data from '../../public/usuarios/entrevistas.json'
import {setadicionarentrevista, setexcluir} from '../../public/controles/controleentrevista'
import moment from "moment";

export default function LoginPageRH() {
  const [nomeCandidato, setNomeCandidato] = useState<string>('');
const [vaga, setVaga] = useState<string>('');
const [redesSociais, setRedesSociais] = useState<string[]>([]);
const [descricao, setDescricao] = useState<string>('');
const [linkTeste, setlinkTeste] = useState<string>('');
const [dataHora, setdataHora] = useState<string>('');
const [responsaveis, setresponsaveis] = useState<string[]>([]);
const [anexos, setanexos] = useState<string[]>([]);

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const entrevista = { 
    id : 0 ,            
    nomeCandidato,
    vaga,
    redesSociais,
    descricao,
    linkTeste,
    dataHora,
    responsaveis,
    anexos,
  };
  await setadicionarentrevista(entrevista);
  // atualizar lista de entrevistas
};


  const dispatch = useDispatch()

  const Darkmode = useSelector((state: State) => state.darkMode)
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleDarkModeToggle = () => {
    dispatch(darkmode());
    };

  const handleClick = (index:number) => {
      setActiveIndex(index);
    };
  const handleclickexcluir = (id:number) => {
    setexcluir(id)
  }
  const handleShowModal = () => {
    setShowModal(true);
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
                <button type="button" className="btn btn-primary mx-2 w-25" onClick={handleShowModal}>Adicionar</button>
                {showModal && (
  <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block" }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Adicionar Entrevista</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}> 
            <div className="mb-3">
              <label htmlFor="nomeCandidato" className="form-label">
                Nome do Candidato
              </label>
              <input type="text" className="form-control" id="nomeCandidato" onChange={(event) => setNomeCandidato(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="vaga" className="form-label">
                Vaga
              </label>
              <input type="text" className="form-control" id="vaga" onChange={(event) => setVaga(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="redesSociais" className="form-label">
                Redes Sociais
              </label>
              <input type="text" className="form-control" id="redesSociais" onChange={(event) => setRedesSociais([event.target.value])}/>
            </div>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>
              <textarea className="form-control" id="descricao" rows={3} onChange={(event) => setDescricao(event.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="linkTeste" className="form-label">
                Link do Teste
              </label>
              <input type="text" className="form-control" id="linkTeste" onChange={(event) => setlinkTeste(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="dataHora" className="form-label">
                Data e Hora
              </label>
              <input type="datetime-local" className="form-control" id="dataHora" onChange={(event) => setdataHora(event.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="responsaveis" className="form-label">
                Responsáveis
              </label>
              <input type="text" className="form-control" id="responsaveis" onChange={(event) => setresponsaveis([event.target.value])}/>
            </div>
            <div className="mb-3">
              <label htmlFor="anexos" className="form-label">
                Anexos
              </label>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="anexos" onChange={(event) => setanexos([event.target.value])} />
                <label className="custom-file-label" htmlFor="anexos">Escolher arquivo</label>
              </div>
            </div>
            <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
          </form>
        </div>
        
      </div>
    </div>
  </div>
)}


                <button type="button" className="btn btn-primary mx-2 " onClick={() => handleclickexcluir(activeIndex)}>excluir</button>
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
