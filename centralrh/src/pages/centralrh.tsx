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

            <main className={`d-flex flex-grow-1 flex-column justify-content-center align-items-center min-vh-100 ${navbarBackgroundColorClass}`}>
              <div className='row flex-grow-1  justify-content-center align-items-center w-100'>
              <div className='col-6 d-flex justify-content-center'>
                <button type="button" className="btn btn-primary mx-2 w-25">Botão</button>
              </div>
                <div className='col-6 list-group ' style={{ maxHeight: "60vh", overflowY: "scroll"}}>
                  <button  className="list-group-item list-group-item-action active" aria-current="true" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                   
                  <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <p>Try scrolling the rest of the page to see this option in action.</p>
                    </div>
                  </div>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                  </button>
                  <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                  </a>
                  
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
