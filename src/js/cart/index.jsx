import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectCartItems, selectCartTotals } from '../selectors/root';
import CartLineItems from './CartLineItems';


const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotals = useSelector(selectCartTotals);

  return (
    <CartContainer>
      <LineItemsSection>
        <CartLineItems items={cartItems} />
      </LineItemsSection>

      <TotalsSection>
        <h1>Cart Total</h1>
        <SpaceBetween>
          <h3>Subtotal: </h3>
          <h3>${cartTotals.subtotal.toFixed(2)}</h3>
        </SpaceBetween>

        <SpaceBetween>
          <h3>Tax: </h3>
          <h3>${cartTotals.tax.toFixed(2)}</h3>
        </SpaceBetween>

        <SpaceBetween>
          <h1>Total: </h1>
          <h1>${cartTotals.total.toFixed(2)}</h1>
        </SpaceBetween>
      </TotalsSection>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.main`
  width: 100vw;
  display: grid;
  justify-items: center;
  grid-template-columns: 2fr 1fr;
`;

const LineItemsSection = styled.section`
  width: 100%;
  height: calc(100vh - 8em);
  padding: 1em;
  overflow: auto;

  & > * {
    margin-bottom: 1em;
  }
`;

const TotalsSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 8em);
  border-left: 1px solid rgb(141, 162, 144);
  box-sizing: border-box;
  margin: 2em 0;
  padding: 1em;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;