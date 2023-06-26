import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists,setDentists] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect( ()=>{
      axios(url)
      .then(res=> setDentists(res.data))
  },[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.length
        ? dentists.map((dentist,index) =>(<Link key={index} to={`dentista/` + dentist.id}><Card data={dentist}/></Link>))
        : null

        }

      </div>
    </main>
  )
}

export default Home