import { types } from "../types/types";

const initialState = {
    categorias:[],
    active:null
}

export const categoriaReducer = (state=initialState,action)=>
{
    switch (action.type) {
        case types.cargarCategorias:
            return {
                ...state,
                categorias:[...action.payload]
            };

        case types.setearCategoriaActive:
            
            return{
                ...state,
                active:action.payload     
            }
    
        default:
            return {
                ...state
            }
    }
}