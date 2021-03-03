import React from 'react'
import { Item } from './Item'

export const Items = ({items}) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                items.map(
                    a=>
                    {
                        return(
                            <Item
                                key={a.id}
                                {...a}
                            />
                        )
                    }
                )
            }
        </div>
    )
}
