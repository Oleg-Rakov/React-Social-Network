import { getAuthUserData } from "./auth-reducer";

let INITIALIZED_SUCCESS = 'INITIALIZED_SUCCEESS'

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export let initialSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export let initialApp = () => dispatch => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initialSuccess())
        })
}

export default appReducer