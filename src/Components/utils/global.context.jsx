import axios from "axios";
import { createContext , useContext, useEffect, useReducer} from "react";


export const initialState = {
  theme: {
    light: {
    font: 'black',
    background: 'white'
    },
    dark: {
    font: 'white',
    background: 'black'
    }}, 
  dentistList: [],
  dentist:{},
  favs: JSON.parse(localStorage.getItem('favs'))||[]
}
export const ContextGlobal = createContext(initialState);



export const dentistReducer = (state,action) => {
    switch (action.type) {
      case "GET_LIST":
        return {...state, dentistList:action.payload}
      case 'GET_DENTIST':
          return {...state, dentist: action.payload}
      case 'ADD_FAV':
          return {...state, favs: [...state.favs, action.payload]}
      case 'RM_FAV':
          return {...state, favs: action.payload}
      default:
        throw new Error()
    }
}

  export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  const [dentistState, dentistDispatch] = useReducer(dentistReducer, initialState)

  const urlList = 'https://jsonplaceholder.typicode.com/users'


  useEffect( ()=>{
    axios(urlList)
    .then(res=> dentistDispatch({type:'GET_LIST', payload:res.data}))
},[])

  useEffect( ()=>{
    localStorage.setItem('favs', JSON.stringify(dentistState.favs))
  },[dentistState.favs])

  return (
    <ContextGlobal.Provider value={{
        dentistState, dentistDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = ()=> useContext(ContextGlobal)

