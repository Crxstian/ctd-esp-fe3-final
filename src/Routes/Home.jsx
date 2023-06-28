import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentistState} = useContextGlobal()
  console.log(dentistState);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistState.dentistList.length
        ? dentistState.dentistList.map(dentist =>(<Link key={dentist.id} to={`dentista/`+dentist.id}><Card dentist={dentist}/></Link>))
        : null
        }
      </div>
    </main>
  )
}

export default Home