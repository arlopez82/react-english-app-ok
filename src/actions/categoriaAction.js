import { obtenerCategorias } from "../helpers/categoriaHelper"
import { types } from "../types/types";

export const setActive = (categ)=>
{
    return {
        type:types.setearCategoriaActive,
        payload:categ
    }
}

export const cargarCategorias = ()=>
{
    return async (dispatch)=>
    {
        const categorias = await obtenerCategorias();

        dispatch({
            type:types.cargarCategorias,
            payload:categorias
        });

    }
    

    

}