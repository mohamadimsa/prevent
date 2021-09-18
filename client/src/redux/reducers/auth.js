import { CONNECTION } from './../actions/actionsType'
const initialState = {
    error: false,
    authenticate: false,
    token: null,
    message: ''

};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case CONNECTION:
            if (action.payload.data.error) {
                return ({
                    error: true,
                    authenticate: false,
                    token: null,
                    message: action.payload.data.message
                })
            }
            return ({
                error: false,
                authenticate: true,
                token: action.payload.data.token,
            })



        default:
            return state
    }
};