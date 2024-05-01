export const INITIALCONNECT = {
    isloading: false,
    error: false,
    data: null
}

export const connectReducer = (state, action) => {
    switch (action.type) {
        case 'CONNECT_REQUEST':
            return {
                ...state,
                isloading: true,
                error: false,
                data: null
            }
        case 'CONNECT_SUCCESS':
            return {
                ...state,
                isloading: false,
                error: false,
                data: action.payload
            }
        case 'CONNECT_FAILURE':
            return {
                ...state,
                isloading: false,
                error: true,
                data: action.payload
            }
        default:
            return state
    }

}