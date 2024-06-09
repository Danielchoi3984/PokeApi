import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './detallePokemon.css'
export const DetallePokemon = ({pokemon, setShowDetail}) => {
    console.log("pokemon", pokemon);
    return (
    <div className='card'>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <ListGroup variant="flush">
            <ListGroup.Item>Base Experience: {pokemon.base_experience}</ListGroup.Item>
            <ListGroup.Item>Height: {pokemon.height}</ListGroup.Item>
            <ListGroup.Item>Weight: {pokemon.weight}</ListGroup.Item>
        </ListGroup> 
      </Card.Body>
    </Card>
    <Button onClick={(e) => setShowDetail(false)}>Volver</Button>
    </div>
  )
}
