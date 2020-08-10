import React from 'react';
import styled from 'styled-components';
import { Card, Typography } from 'antd';
import { arrayOf, shape, number, string } from 'prop-types';

const { Text } = Typography;

import smallPampas from '../../assets/smallpampas.jpg';

const CartLineItems = (props) => {
  
  return props.items.map((item) => {
    let productImage = smallPampas;
    if (item.image) {
      productImage = item.image;
    }
    return (
      <Card
        hoverable
        key={item.id}
        size="small"
        title={item.name}
        extra={<Text>Quantity: {item.quantity} </Text>}
        style={{ width: '100%' }}
      >
        <ImageContainer>
          <ImageThumbnail style={{ backgroundImage: `url(${productImage})` }} />
          <p>{item.description}</p>
        </ImageContainer>
      </Card>
    );
  });
};

export default CartLineItems;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ImageThumbnail = styled.div`
  height: 150px;
  min-width: 150px;
  display: flex;
  background-size: cover;
  margin-right: 10px;
`;

CartLineItems.propTypes = {
  items: arrayOf(
    shape({
      id: string,
      name: string,
      price: number,
      description: string,
      manufacturerName: string,
      manufacturerLocation: string,
      image: string,
      quantity: number,
    })
  ),
};