import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './detalleitem.css'
export const DetalleItem = ({item, setShowDetail}) => {
    return (
    <div className='card'>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={item.sprites.default} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <ListGroup variant="flush">
            <ListGroup.Item>cost: {item.cost}</ListGroup.Item>
            <ListGroup.Item>fling_power: {item.fling_power}</ListGroup.Item>
            <ListGroup.Item>fling_effect: {item.fling_effect}</ListGroup.Item>
        </ListGroup> 
      </Card.Body>
    </Card>
    <Button onClick={(e) => setShowDetail(false)}>Volver</Button>
    </div>
  )
}