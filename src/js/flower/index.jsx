import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Spin, Button, Card, Modal } from 'antd';

import { addToCart } from '../actions/cart';
import {
  selectProductFromPathname,
  selectCategoryLoading,
} from '../selectors/root';

import smallPampas from '../../assets/smallpampas.jpg';

const Flower = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();

  const products = useSelector(selectProductFromPathname(pathname));
  const isLoading = useSelector(selectCategoryLoading);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  if (isLoading) {
    return (
      <Spin />
    );
  }

  if (!products) {
    return (
      <section>
        <h1>No Products Found!</h1>
        <Link to="/">
          <Button type="link">See Our Other Bouquets</Button>
        </Link>
      </section>
    );
  }

  const openModal = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const addToCartHandle = () => {
    dispatch(addToCart(modalProduct));
    setModalProduct({});
    setModalOpen(false);
    history.push('/cart');
  };

  const { Meta } = Card;

  return (
    <div>
      <Modal
        title={modalProduct.name}
        visible={modalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={addToCartHandle}>
            Add To Cart
          </Button>,
        ]}
      >
        <div>
          <ProductTitles> Description: </ProductTitles>
          {modalProduct.description}
        </div>
        <div>
          <ProductTitles> Manufacturer Name: </ProductTitles>
          {modalProduct.manufacturerName}
        </div>
        <div>
          <ProductTitles> Manufacturer Location: </ProductTitles>
          {modalProduct.manufacturerLocation}
        </div>
      </Modal>

      <ProductsWrapper>
        {products.map((product) => {
          let productImage = smallPampas;
          if (product.image) {
            productImage = product.image;
          }
          return (
            <Card
              key={product.id}
              hoverable
              onClick={() => {
                openModal(product);
              }}
              style={{
                margin: '16px',
                width: '250px',
                backgroundColor: 'rgb(242, 203, 187)',
              }}
              cover={
                <CardImage
                  style={{ backgroundImage: `url(${productImage})` }}
                />
              }
            >
              <Meta title={product.name} description={`$${product.price}`} />
            </Card>
          );
        })}
      </ProductsWrapper>
    </div>
  );
};

export default Flower;

const CardImage = styled.div`
  width: 250px;
  height: 300px;
  background-position: center;
  background-size: cover;
`;

const ProductTitles = styled.div`
  font-weight: 500;
`;

const ProductsWrapper = styled.section`
  width: 100vw;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;