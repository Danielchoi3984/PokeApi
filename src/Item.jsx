import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { DetalleItem } from './detalleItem';
import './HomePage.css'

export const Item = (page = 0 ) => {
  const [items,setItems] = useState([]);
  const [selecionado,setSeleccionado] = useState(null);
  const [showDetail,setShowDetail] = useState(false);


  useEffect(()=>{
    const fetchItems = async ()=> {
    try{
      const list = [];
      for (let i = 1; i <= 20; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/item/${i}`);
      const item = await response.json();
      list.push(item);
      }
      setItems(list)
    }
    catch(error){
      console.error('fetch error ',error)
    }
  };
  fetchItems();
  },[]);
  return (
    <div>
      {(showDetail) ? 
        <detalleItem item={selecionado} setShowDetail={setShowDetail}/> :
        (
          <div  className='container'> 
      <h2> Lista de Items</h2>
        <Table  striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th>ID </th>
              <th>Name</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>
          {items.map(function (item)
            {
            return(
            <tr key={item.id} onClick={()=>setSeleccionado(item)} className={selecionado?.id === item.id ? 'seleccionado' : ""}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img src={item.sprites.default}/></td>
            </tr>)
            }
          )}
          </tbody>
        </Table>
          <Button onClick={(e) => setShowDetail(true)}>MostrarDetalle</Button>
      </div>
      )
      }
  </div>
  );

}
export default Item