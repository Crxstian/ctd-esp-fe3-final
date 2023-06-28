import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const handleSubmit = (e) => {
    e.preventDefault()
    
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="Escriba su nombre"/>
        <input type="text" name="email" placeholder="Escriba su email"/>
        <button >Enviar</button>
      </form>
    </div>
  );
};

export default Form;
