import React from 'react'
import Item from './Item';

const Grid = ({ productos }) => {

    return (
    <>
             {
                productos.map( q => 
                    
                        <Item 
                            {...q}
                            key={ q.id }
                        />
                     )
            } 
    </>
  )
}

export default Grid