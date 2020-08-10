import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const Header = () => {
  const history = useHistory();
  return (
    <StyledHeader onClick={() => {
      history.push('/');
    }}>
      The Bouqs Code Challenge
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bec7b4;
  height: 3em;
  width: 100vw;
  font-size: 20px;
  cursor: pointer;
`;