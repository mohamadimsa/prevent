import { ALL_SERIES,FAVORITE_SERIE } from '../actions/actionsType';

const initialState = {
    data: null,
    favorite : null
}

export const serie = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITE_SERIE:
            return {
                data: action.payload.data,
                favorite: action.payload.data
                
            }
        case ALL_SERIES:
            return {
                data: action.payload.data ,
                favorite: action.payload.favorite
            }

        default:
            return state
    }
};