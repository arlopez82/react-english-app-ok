import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActive } from '../actions/categoriaAction';

export const Categoria = ({categoria}) => {

    const dispatch = useDispatch();

    const setearActiva = ()=>
    {
       dispatch(setActive(categoria));
    }

    return (
            <img 
                src={categoria.image}
                style={
                    {
                        height:'150px',
                        width:'150px',
                        paddingRight:'5px',
                        cursor:'pointer'
                    }}
                onClick={setearActiva}
            />
    )
}
