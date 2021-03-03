import React, { useEffect, useMemo } from 'react'
import { Categoria } from './Categoria'
import { Item } from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { cargarCategorias } from '../actions/categoriaAction';
import { Items } from './Items';

export const Main = () => {

    const dispatch = useDispatch();

    const {categorias,active} = useSelector(state => state.categoria);
    
    useEffect(() => {
        dispatch(cargarCategorias());    
    }, []);

    return (
        <>
  
        <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                overflowX:'scroll',
        }}>
        {
            categorias.map(a=>
            {
                return(
                    <Categoria 
                        key={a.id}
                        categoria={a}
                        />
                )
            })

        }
    
        </div>
            {
                (active != null)
                &&
                <Items
                    items={active.items}
                />
            }

        </>
    )
}
