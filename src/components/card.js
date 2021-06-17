import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const cardStyle ={
    width: 1000,
    textAlign:'center',
};

const CardComponent = (props) => (
    <Card style={cardStyle}>
      <Image src='https://contactonews.co/storage/images/thumb-large-Obelisco-Buenos-Aires.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>
            <div>pais: {props.data.sys.country} </div>
        </Card.Meta>
        <Card.Meta>
            <div>humedad: {props.data.main.humidity} %</div>
        </Card.Meta>
        <Card.Meta>
        <div>nubes: {props.data.clouds.all} </div>
        </Card.Meta>
        <Card.Meta>
        <div>temperatura: {props.data.main.temp} </div>
        </Card.Meta>
        <Card.Meta>
        <div>temperatura minima: {props.data.main.temp_min} </div>
        </Card.Meta>
        <Card.Meta>
        <div>temperatura maxima: {props.data.main.temp_max} </div>
        </Card.Meta>
       
      
      </Card.Content>
      
    </Card>
  )

export default CardComponent;