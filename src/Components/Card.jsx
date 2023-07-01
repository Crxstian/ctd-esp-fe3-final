import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import { useEffect } from "react";

const Card = ({dentist}) => {

  const{dentistState,dentistDispatch} = useContextGlobal()

  const addFav = (event)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    event.preventDefault();
    const isFavorite = dentistState.favs.some((dentistFav) => dentistFav.id === dentist.id);
    if (isFavorite) {
      //Construir nuevo array sin el dentist actual en caso de que ya este, asi se remueve
      const newFavorites = dentistState.favs.filter(dentistFav => dentistFav.id !== dentist.id)
      dentistDispatch({type:'RM_FAV',payload :newFavorites});
      
    }
    else dentistDispatch({type:'ADD_FAV',payload : dentist})
  }
  //Usando este use effect pude lograr que las cards renderizen cuando son eliminadas de favs, y otro useEffect en Favs
  useEffect( ()=>{
    localStorage.setItem('favs', JSON.stringify(dentistState.favs))
  },[dentistState.favs])
  
  return (
    <div className="card">
        <Link key={dentist.id} to={`/dentista/${dentist.id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="image-card" src='../../public/images/doctor.jpg' alt="Imagen de Doctor" />
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav}  style={{ backgroundColor: dentistState.favs.some((dentistFav) => dentistFav.id === dentist.id) ? "yellow" : "red" }}  className="favButton">★</button>
        </Link>
    </div>
  );
};

export default Card;
