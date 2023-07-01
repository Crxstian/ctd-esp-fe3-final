import { routes } from './utils/routes'
import { Link } from 'react-router-dom'
import '../../src/index.css'
import { useContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const{dentistState,dentistDispatch} = useContextGlobal()
  const handleThemeChange = () => {
    if (dentistState.theme === 'dark') 
    {
      dentistDispatch({type: 'LIGHT',payload:"light"})
    } else {
      dentistDispatch({type: 'DARK',payload:"dark"})}
  }


  const themeClassName = dentistState.theme === 'dark' ? 'dark-theme' : 'light-theme';
  const navbarClassName = `nav ${themeClassName}`;
  return (
    <nav className={navbarClassName}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <h2>DH Odonto</h2>
        <div className='routesNav'>
          <Link to={routes.home}><h4>Home</h4></Link>
          <Link to={routes.contact}><h4>Contact</h4></Link> 
          <Link to={routes.favourites}><h4>Favs</h4></Link> 
          <button className='dark-button' onClick={handleThemeChange}>Change theme</button>  
        </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar