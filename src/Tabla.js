import React from 'react'
import AddProduct from './components/AddProduct'
import Grid from './components/Grid'
import Item from './components/Item'
import 'bootstrap/dist/css/bootstrap.css';


const Tabla = ({pro,des,stock,pre,ru}) => {

  return (
    <>
    <div className='container'>
    <table className='table table-bordered 
                      table-dark 
                      table-responsive'> 

      <thead>
        
        <tr>
           <th>Producto</th>
           <th>Descripcion</th>
           <th>Stock</th>
           <th>Precio</th>
           <th>Rubro</th>
        </tr>
        
        {
          <Grid></Grid>
        }
    
      </thead>
      
      <tbody>
      
        {
          <>
          <Item /> 
          </> 
        }
        
      </tbody>
    
    </table>
    
    <hr />
    
    <br />
    
   
    <AddProduct />

    </div>
    
    </>
  )
}

export default Tabla