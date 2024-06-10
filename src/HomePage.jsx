import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { DetallePokemon } from './detallePokemon';
import NavbarPokeApi  from './NavbarPokeApi';

import './HomePage.css'

export const HomePage = (page = 0 ) => {
  const [pokemons,setPokemons] = useState([]);
  const [selecionado,setSeleccionado] = useState(null);
  const [showDetail,setShowDetail] = useState(false);


  useEffect(()=>{
    const fetchPokemons = async ()=> {
    try{
      const list = [];
      for (let i = 1; i <= 10; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = await response.json();
      list.push(pokemon);
      }
      setPokemons(list)
    }
    catch(error){
      console.error('fetch error ',error)
    }
  };
  fetchPokemons();
  },[]);
  const handleDetalle = async (idPokemon) => {
      <detallePokemon/>
  }
  return (
    <div>
      {(showDetail) ? 
      <div>
        <NavbarPokeApi></NavbarPokeApi>
        <DetallePokemon pokemon={selecionado} setShowDetail={setShowDetail}/> 
        <div/>
        :
        (
          <div responsive className='container'> 
      <h2> Lista de Pokemones</h2>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th>ID Pokemon</th>
              <th>Name</th>
              <th>Base Experience</th>
              <th>Img </th>
              
            </tr>
          </thead>
          <tbody>
          {pokemons.map(function (pokemon)
            {
            return(
            <tr key={pokemon.id} onClick={(e)=>setSeleccionado(pokemon)} className={selecionado?.id === pokemon.id ? 'seleccionado' : ""}>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.base_experience}</td>
              <td><img src={pokemon.sprites.front_default}/></td>
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
export default HomePage
