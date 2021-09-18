import {CONNECTION} from "./actionsType";

export  const connection = (data)=>({
     type: CONNECTION,
     payload:{
         data
     }
})