import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const{dentistState,dentistDispatch} = useContextGlobal()

  const params = useParams()
  console.log(params);

  const url = 'https://jsonplaceholder.typicode.com/users/'+ params.id

  useEffect( ()=>{
      axios(url)
      .then(res=> dentistDispatch({type:'GET_DENTIST', payload: res.data}))
  },[])

  return (
    <>
      <h1>Detail Dentist {dentistState.id} </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>WebSite</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{dentistState.dentist.name}</td>
              <td>{dentistState.dentist.email}</td>
              <td>{dentistState.dentist.phone}</td>
              <td>{dentistState.dentist.website}</td>
            </tr>
            
          </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail