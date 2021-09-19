import {CONNECTION,ALL_SERIES, FAVORITE_SERIE} from "./actionsType";

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

export const favorite_serie = (data)=>({
    type: FAVORITE_SERIE,
    payload:{
        data
    }
})