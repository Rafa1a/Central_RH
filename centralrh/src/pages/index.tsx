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
    <>
      <header>
      <nav className={`navbar navbar-expand-lg  ${navbarBackgroundColorClass} ${navbartoggler}`}>
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
      <main>
        <h1>E ai qual seu time?</h1>
        <div>
          <h2>Time do RH</h2>
          <button>Login</button>
        </div>
        <div>
          <h2>Time de Tecnologia</h2>
          <button>Login</button>
        </div>
      </main>

      <footer>
          <h3>@Criado Por Rafa</h3>
      </footer>
    </>

             
    
    
  )
}