import React, { useState, useEffect } from 'react'
import Item from './Item';


const Grid = ( { p } ) => {
  
    const [information, setInformation] = useState([]);

    //useEffect nos permite ejecutar la funcion getInf solamente cuando se renderiza por primera vez 

    useEffect( () => {
        getInf();
    }, []) 
    
    //cuando mandamos [] es una lista de dependencia, quiere decir como un array
    
    const getInf = async() => {
        
        const url='https://run.mocky.io/v3/c3d00cfc-825d-45a0-a1f3-c5b92d076371';
        const resp =  await fetch( url );
        const data = await resp.json();

        const info = data.map( inf => {
          
            
            return {
                
                id: inf.id,
                pro: inf.name,
                des: inf.description,
                stock: inf.stock,
                pre: inf.precio,
                item: inf.item,

            } 
            
        }) 

        setInformation(info);

    }

   
    return (
    <>
             {
                information.map( q => 
                    
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