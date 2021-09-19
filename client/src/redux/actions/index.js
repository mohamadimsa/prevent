import {CONNECTION,ALL_SERIES} from "./actionsType";

export  const connection = (data)=>({
     type: CONNECTION,
     payload:{
         data
     }
});

export const all_series = (data)=>({
    type: ALL_SERIES,
    payload:{
        data
    }
})