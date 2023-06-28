
const Card = ({dentist}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="image-card" src='../../public/images/doctor.jpg' alt="Imagen de Doctor" />
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">★</button>
    </div>
  );
};

export default Card;
