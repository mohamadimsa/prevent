import { ALL_SERIES } from '../actions/actionsType';

const initialState = {
    data: null
}

export const serie = (state = initialState, action) => {
    switch (action.type) {
        case ALL_SERIES:
            return {
                data: action.payload.data
            }

        default:
            return state
    }
};