import React, { useState } from 'react'



const AddProduct = ({ productos, setProductos }) => {

  const [product, setPro] = useState('');

  const [descrip, setDes] = useState('');

  const [stock, setStock] = useState('');

  const [precio, setPre] = useState('');

  const [rubro, setRu] = useState('');


  const handleProduc = (e) => (setPro(e.target.value));

  const handleDes = (e) => (setDes(e.target.value));

  const handleStock = (e) => (setStock(e.target.value));

  const handlePre = (e) => (setPre(e.target.value));

  const handleRu = (e) => (setRu(e.target.value));


  const handleAgregar = (e) => {

    e.preventDefault();

    //Obtener el arreglo actual

    console.log(productos)

    //Agregar el objeto mio 

    const nuevos_productos = [...productos, {

      id: `a${new Date()}`,
      pro: product,
      des: descrip,
      stock: stock,
      pre: precio,
      item: rubro

    }]
    
    //Actualizar el estado 

    setProductos(nuevos_productos);

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
              value={product}
              onChange={handleProduc}
            />

            <br />

            <label>Descripcion</label>

            <input
              className='form-control'
              type='text'
              value={descrip}
              onChange={handleDes}
            />

            <br />

            <label>Stock</label>

            <input
              className='form-control'
              type='text'
              value={stock}
              onChange={handleStock}
            />

            <br />

            <label>Precio</label>

            <input
              className='form-control'
              type='text'
              value={precio}
              onChange={handlePre}
            />

            <br />

            <label>Rubro</label>

            <input
              className='form-control'
              type='text'
              value={rubro}
              onChange={handleRu}
            />

            <br />

            <button
              className='btn btn-primary'
              type='button'
              onClick={handleAgregar}
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