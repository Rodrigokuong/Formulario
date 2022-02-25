import React from 'react'

const Item = ( {pro, des, stock, pre, item} ) => {
  
    return (
    <>

        <tr>

            <td>{pro}</td>
            <td>{des}</td>
            <td>{stock}</td>
            <td>{pre}</td>
            <td>{item}</td>
            
        </tr>
             
    </>
  )
}

export default Item