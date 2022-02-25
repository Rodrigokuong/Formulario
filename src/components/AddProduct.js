import React, { useState} from 'react'
import Item from './Item';


const AddProduct = ({setInformation}) => {
  
    const [pro, setPro] = useState('');

    const [des, setDes] = useState('');

    const [stock, setStock] = useState('');

    const [pre, setPre] = useState('');

    const [ru, setRu] = useState('');
    


    const handleProduc = ( e ) => ( setPro(e.target.value) );

    const handleDes = ( e ) => ( setDes(e.target.value) );

    const handleStock = ( e ) => ( setStock(e.target.value) );

    const handlePre = ( e ) => ( setPre(e.target.value) );

    const handleRu = ( e ) => ( setRu(e.target.value) );

    
    

    const handleClick = ( e ) => {

      e.preventDefault();

      if( pro.trim().length > 2 ){
          <>        
            <Item setInformation= { info => [...info , pro]} />
            <td>{pro}</td>
          </>
          console.log();
          setPro('');
      }

      if( des.trim().length > 2 ){
        <>        
          <Item setInformation= { info => [...info , des]} />
          <td>{des}</td>
        </>
        console.log(des);
        setDes('');
    }

    if( stock.trim().length > 2 ){
      <>        
        <Item setInformation= { info => [...info , stock]} />
        <td>{stock}</td>
      </>
      console.log(stock);
      setStock('');
  }  
      
  if( pre.trim().length > 2 ){
    <>        
      <Item setInformation= { info => [...info , pre]} />
      <td>{pre}</td>
    </>
    console.log(pre);
    setPre('');
}    

if( ru.trim().length > 2 ){
  <>        
    <Item setInformation= { info => [...info , ru]} />
    <td>{ru}</td>
  </>
  console.log(ru);
  setRu('');
}

    }

return (
  <>

  <div className='container'>
    
    <div className='panel panel-primary'>

      <div className='panel-heading'><h3>Nuevo Producto</h3></div>
      
      <div className='panel-body'>
  
      <label>Producto</label>

        <input 
          className='form-control'
          type='text'
          value={ pro }
          onChange={ handleProduc }
        />
    
          <br />
    
      <label>Descripcion</label>

        <input
          className='form-control' 
          type='text'
          value={ des }
          onChange={ handleDes }
          />

          <br />
    
      <label>Stock</label>

        <input
          className='form-control' 
          type='text'
          value={ stock }
          onChange={ handleStock }
        />

          <br />
    
      <label>Precio</label>

        <input 
          className='form-control'
          type='text'
          value={ pre }
          onChange={ handlePre }
        />

          <br />
    
      <label>Rubro</label>

        <input 
          className='form-control'
          type='text'
          value={ ru }
          onChange={ handleRu }
        />
    
        <br />

        <button 
          className='btn btn-primary'
          type='button' 
          onClick={ handleClick }
        >
            Agregar Producto
        </button>

        

        </div> {/* panel body */}
      </div> {/* panel default */}
    </div> {/* container */}
  </>
  )
}

export default AddProduct