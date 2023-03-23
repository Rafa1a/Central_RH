
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import {darkmode} from '../../store/actions'
import {State} from '../../store/interfaces'



export default function Home() {
  const dispatch = useDispatch()
  const Darkmode = useSelector((state: State) => state.darkMode)

  const handleDarkModeToggle = () => {
    dispatch(darkmode());
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
  
      <div className={`d-flex flex-column min-vh-100 ${navbarBackgroundColorClass}`}>
        <header className='sombra'>
        <nav className={`navbar navbar-expand-sm  ${navbarBackgroundColorClass} ${navbartoggler}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${navbarTextColorClass}`}  href="/">Controll</Link>
          <button className="navbar-toggler navbar-toggler-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link active ${navbarTextColorClass}`} aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${navbarTextColorClass}`} href="/">Sobre</Link>
              </li>
            </ul>
        
          </div>
          <button className= {`btn btn-sm ${Darkmode ? 'btn-light' : 'btn-dark'}`} onClick={handleDarkModeToggle}>{Darkmode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
        </nav>
          </header>

          <main className='container text-center flex-grow-1 '>
            <div className='row '>
              <h1 className={`col m-5 h-100 ${navbarTextColorClass}`}>E aí, Qual é o Seu Time?</h1>
            </div>
            <div className='row align-items-center ' >

              <div className='col-4 m-auto '>

                <div className={`card flex-grow-1 h-50 ${BackgroundColorClass}`}>

                  <div className='card-body d-flex flex-column align-items-center '>

                    <h2 className={`card-title m-4  textS ${TextColorClass}`}>Time do <strong className='corV'>RH</strong></h2>

                    <Link className='btn btn-primary buttonL' href="/loginrh">Login</Link>
                    
                  </div>
                </div>
              </div>
              <div className='col-1 d-flex justify-content-center align-items-center divP '>
                <div className={`vr ${BackgroundColorClass}`}></div>
              </div>
              <div className='col-4 m-auto'>

                <div className={`card flex-grow-1 h-50 ${BackgroundColorClass}`}>

                  <div className='card-body d-flex flex-column align-items-center '>

                    <h2 className={`card-title m-4  textS ${TextColorClass}`}>Time de <strong className='corV'>Tecnologia</strong></h2>

                    <Link className='btn btn-primary buttonL ' href="/logintec">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </main>

        <footer className=" bg-dark text-light py-2">
          <div className="container d-flex justify-content-center ">
            <p className="m-0 ">@Criado Por Rafa</p>
          </div>
        </footer>
      </div>
    

             
    
    
  )
}