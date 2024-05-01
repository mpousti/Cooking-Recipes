export const INITIAL_STATE = {
    title:"",
    ingredients: [],
    method:"",
    cookingTime:"",
}

export const formReducer = (state, action) =>{
    switch(action.type){
        case "CHANGE_INPUT": 
            return {...state, [action.payload.name]: action.payload.value};
        case "ADD_INGREDIENTS":
            return {...state, ingredients: [...state.ingredients, action.payload]};
           
        default:
            return state;
    }
}