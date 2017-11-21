import React from 'react';
import { Card, CardBody, Button, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const style = {
  card: {
    color: "#212529"
  }
}
const WispMini = ({ id, name, onClick }) => {
  return (
    <Card style={style.card} >
      <CardBody>
      <CardTitle>{ name }</CardTitle>
      <Button onClick={onClick(id)} color="secondary">Details</Button>
      </CardBody>
    </Card>
    )
}

export default WispMini;
