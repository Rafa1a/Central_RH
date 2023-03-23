import PrivateRoute, { LoginType } from './PrivateRoute';
import {useSelector,useDispatch } from 'react-redux'
import {State} from '../../store/interfaces'
import Link from 'next/link';
import {darkmode} from '../../store/actions'

export default function LoginPageRH() {
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
    
      <PrivateRoute loginType={LoginType.RH}>
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
                <Link className={`nav-link active ${navbarTextColorClass}`} aria-current="page" href="/">Candidatos</Link>
              </li>
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
        <h1>ola vamo nessa RH</h1>  
      </PrivateRoute>
    
  );
}
