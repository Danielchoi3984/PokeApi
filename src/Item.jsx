import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { detalleItem } from './detalleItem';
import './HomePage.css'

export const Item = (page = 0 ) => {
  const [items,setItems] = useState([]);
  const [selecionado,setSeleccionado] = useState(null);
  const [showDetail,setShowDetail] = useState(false);


  useEffect(()=>{
    const fetchItems = async ()=> {
    try{
      const list = [];
      for (let i = 1; i <= 10; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/Item/${i}`);
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
  const handleDetalle = async (id) => {
      <detalleItem/>
  }
  return (
    <div>
      {(showDetail) ? 
        <detalleItem item={selecionado} setShowDetail={setShowDetail}/> :
        (
          <div responsive className='container'> 
      <h2> Lista de Items</h2>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th>ID </th>
              <th>Name</th>
              <th>Base Experience</th>
              <th>Img </th>
              
            </tr>
          </thead>
          <tbody>
          {items.map(function (item)
            {
            return(
            <tr key={item.id} onClick={()=>setSeleccionado(item)} className={selecionado?.id === item.id ? 'seleccionado' : ""}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.base_experience}</td>
              <td><img src={item.sprites.front_default}/></td>
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