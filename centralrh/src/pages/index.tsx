import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PrivateRoute from './PrivateRoute';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import {darkmode} from '../../store/actions'
import {State, Action} from '../../store/interfaces'

const inter = Inter({ subsets: ['latin'] })

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
    
  return (
  
      <div className='d-flex flex-column min-vh-100'>
        <header>
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
          <main className='container text-center flex-grow-1'>
            <div className='row '>
              <h1 className='col m-5 h-100'>E aí, qual é o seu time?</h1>
            </div>
            <div className='row align-items-center' >
              <div className='col-4 m-auto'>
                <div className='card flex-grow-1 h-50  '>
                  <div className='card-body d-flex flex-column align-self-center '>
                    <h2 className='card-title m-5 '>Time do RH</h2>
                    <div className='mt-auto m-2'><button className='btn btn-primary h-40 w-50 '>Login</button></div>
                  </div>
                </div>
              </div>
              <div className='col-4 d-flex justify-content-center align-items-center divP '>
                <div className='vr'></div>
              </div>
              <div className='col-4'>
                <div className='card flex-grow-1'>
                  <div className='card-body'>
                    <h2>Time de Tecnologia</h2>
                    <button>Login</button>
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