import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favsFromLocalStorage1 = JSON.parse(localStorage.getItem('favs')) || []
  const {dentistState} = useContextGlobal()
  // Con esto uso la infomracion traida del Storage como base y la seteo con useState
  const [favs, setFavs] = useState(favsFromLocalStorage1);
  //Luego antes de continuar me aseguro que no hubo cambios en el estado Global favs, de ser asi, por el useEffect interno que tiene en global context 
  //se actualiza el storage y nuevamente seteo con setFavs traidos del storage que fue actualizado
  useEffect( () => {
      const favsFromLocalStorage = JSON.parse(localStorage.getItem('favs')) || []
      setFavs(favsFromLocalStorage)
  },[dentistState.favs])



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map(dentist =>(<Card key={dentist.id} dentist={dentist}/>))
        }
      </div>
    </>
  );
};

export default Favs;
